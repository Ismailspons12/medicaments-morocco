import express from 'express'
import cors from 'cors'

import { route as barcodeRoute } from './routes/barcode'
import { route as priceRoute } from './routes/price'
import { route as providerRoute } from './routes/provider'
import { route as medicamentsRoute } from './routes/medicaments' // AJOUTE CETTE LIGNE

const routes = [barcodeRoute, priceRoute, providerRoute, medicamentsRoute] // AJOUTE medicamentsRoute ICI
