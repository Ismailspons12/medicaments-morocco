import { Router } from 'express'
import fetch from 'node-fetch'

export const route = Router()

route.get('/medicaments', async (req, res) => {
  try {
    const response = await fetch('https://raw.githubusercontent.com/rramiachraf/medicaments-morocco/main/data/medicaments.json')
    
    if (!response.ok) {
      throw new Error('Failed to fetch medications data')
    }
    
    const data = await response.json()
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
