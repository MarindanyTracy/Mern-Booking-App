import express from "express";
import { countByType, countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel, getHotelRooms } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// CREATE
router.post('/', verifyAdmin, createHotel)
// UPDATE
router.put('/:id', verifyAdmin, updateHotel)
// DELETE
router.delete('/:id', verifyAdmin, deleteHotel)
//GET
router.get('/find/:id', getHotel);
// GET ALL
router.get('/', getHotels)
// COUNT BY CITY
router.get('/countByCity', countByCity)
// COUNT BY TYPE
router.get('/countByType', countByType)
//
router.get('/room/:id', getHotelRooms)






export default router;
