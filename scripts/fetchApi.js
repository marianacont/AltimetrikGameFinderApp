const apiKey = "076125fe7d0647b6a94e0263bcf57f86";
fetch(`https://rawg.io/api/games?token&key=${apiKey}`)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));