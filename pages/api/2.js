export default function handler(req, res) {
  res.status(200).json(
    {
      id: '2',
      title: "Second",
      date: "2020-01-03",
      contentHtml: "SecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecondSecond"
    }
    );
}
