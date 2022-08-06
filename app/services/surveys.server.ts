import { db } from '~/utils/db.server'
export type { Survey } from '@prisma/client'

export const getSurveys = () => db.survey.findMany()
