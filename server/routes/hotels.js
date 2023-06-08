import express from "express";
import { countByType, countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post('/', verifyAdmin, createHotel)
// UPDATE
router.put('/:id', verifyAdmin, updateHotel)
// DELETE
router.delete('/:id', verifyAdmin, deleteHotel)
//GET
router.get('/:id', getHotel);
// COUNT BY CITY
router.get('/countByCity', countByCity)
// COUNT BY TYPE
router.get('/countByType', countByType)

// GET ALL
router.get('/', getHotels)




export default router;
