import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
    res.send("server is running")
});


export default router;