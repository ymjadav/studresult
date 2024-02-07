import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	success: boolean;
};

export default (_req: NextApiRequest, res: NextApiResponse<Data>): void => res.status(200).json({ success: true });
