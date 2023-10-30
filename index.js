<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script>
    try {
      const num1 = parseInt(prompt('Numero 1'))
      const num2 = parseInt(prompt('Numero 2'))
      if (!num1 || !num2) throw new Error('Número não válido')
      alert(`${num1} + ${num2} = ${num1+num2}`)
    } catch (e) {
      alert(e)
    } finally {
      alert('Finalizado')
    }
  </script>
</head>
<body>
  
</body>
</html>