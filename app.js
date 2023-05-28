const express = require('express')
const app = express()
const path = require('path')

const port = 4500

app.use(express.static(path.join(__dirname, 'public')))
app.use('/src', express.static(path.join(__dirname, 'src')))

// Index route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
    }
)

// Contact route
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'))
    }
)

app.listen(port, () => console.log(`Server running on http://localhost:${port}`))

