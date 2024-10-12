import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { Telegraf } from 'telegraf'
import sleep from 'sleep-promise'

const __dirname = dirname(fileURLToPath(import.meta.url))

const bot = new Telegraf('1933441686:AAGs4g3xiKeLOx8dad5zrKhjrcgh1Ma1R_k')
const app = express()

app.use(express.json())

app.use('/', express.static(join(__dirname, '../front/build')))

app.post('/data', async (req, res) => {
  res.end('ok')

  try {
    if (req.body.phone.length === 0) {
      return
    }
  
    const data = `phone: +${req.body.phone.match(/\d/gi).join('')}\nprice: ${req.body.price}$\ncars: ${req.body.cars}\nhours: ${req.body.hours}\ncomment: ${req.body.comment}`
  
    console.log(data)
  
    try {
      await bot.telegram.sendMessage(6629926445, data)
    } catch (e) {}
  
    await sleep(2000)
  
    try {
      await bot.telegram.sendMessage(439234155, data)
    } catch (e) {}
  } catch (e) {}
})

app.listen(7777)