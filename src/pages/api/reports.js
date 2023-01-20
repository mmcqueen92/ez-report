import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'POST':

      const {
        perpetrator,
        infraction,
        action
      } = req.body;

      const report = await prisma.report.create({
        data: {
          perpetrator,
          infraction,
          action
        }
      })
      res.redirect("/")
      // res.status(201).json(report)
      prisma.$disconnect()
      break

    default:
      res.setHeader('Allow', ['POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}