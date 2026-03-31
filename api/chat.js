// api/chat.js — Proxy seguro hacia Anthropic
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { message, studentName, level, subject } = req.body;
  if (!message) return res.status(400).json({ error: 'Missing message' });

  const subjectNames = { math: 'Matemáticas', read: 'Lectura', sci: 'Ciencias' };
  const levelText    = level === 'primaria' ? 'primaria (nivel cognitivo 10-11 años)' : 'secundaria (nivel cognitivo 12-14 años)';
  const subjectText  = subjectNames[subject] || 'varios temas';

  const system = `Eres Sofía, una tutora virtual muy paciente, cálida y alentadora.
Estás ayudando a ${studentName||'un alumno'}, estudiante de ${levelText}, en la materia de ${subjectText}.

Reglas estrictas:
- Lenguaje MUY simple, cálido y cercano. Usa oraciones cortas.
- NUNCA hagas sentir mal al alumno por equivocarse.
- Celebra cada logro, por pequeño que sea.
- Explica con ejemplos concretos y cotidianos que un niño entienda.
- Máximo 3 oraciones por respuesta. Sé breve y clara.
- Usa 1-2 emojis por respuesta (nunca más).
- Si el alumno pregunta algo fuera del tema educativo, redirige amablemente.
- Habla en español latinoamericano, informal y amigable.
- Si el alumno parece frustrado, dale ánimo antes de explicar.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 300,
        system,
        messages: [{ role: 'user', content: message }],
      }),
    });

    if (!response.ok) {
      console.error('Anthropic error:', await response.text());
      return res.status(500).json({ reply: '¡Lo siento! Tuve un problema. Intenta de nuevo. 😊' });
    }

    const data  = await response.json();
    const reply = data.content?.map(c => c.text||'').join('') || '¡Claro! Aquí estoy para ayudarte. 😊';
    return res.status(200).json({ reply });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ reply: '¡Ups! Algo salió mal. Intenta en un momento. 😊' });
  }
}
