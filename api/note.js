export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://note.com/api/v2/creators/teramachi_office/contents?kind=note&page=1'
    );

    const data = await response.json();

    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({
      error: 'Failed to fetch note data'
    });
  }
}