import dbConnect from '../../../utils/dbConnect';
import Login from '../../../models/Login';

dbConnect();

export default async (req, res) => {
    const { method } = req;

    switch(method) {
        case 'GET':
            try {
                const login = await Login.find({});

                res.status(200).json({
                    success: true,
                    data: login
                })
            }
            catch(error) {
                res.status(400).json({
                    success: false
                })
            }
            break;
        case 'POST': 
            try {
                const login = await Login.create(req.body);

                res.status(201).json({
                    success: true,
                    data: login
                })
            }
            catch(error) {
                res.status(400).json({
                    success: false
                })
            }
            break;
        default:
            res.status(400).json({
                success: false
            })
    }
}