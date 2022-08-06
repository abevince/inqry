import type { LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { getSurveys } from '~/services/surveys.server'
import type { Survey } from '~/services/surveys.server'
import SurveyComponent from '~/components/modules/surveys/Survey'

type LoaderData = {
  surveys: Survey[]
}

export const loader: LoaderFunction = async () => {
  const data: LoaderData = { surveys: await getSurveys() }

  return json(data)
}

export default function Index() {
  const { surveys } = useLoaderData<LoaderData>()
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1 className="text">Welcome to Remix</h1>
      <ul>
        {surveys.map(survey => (
          <SurveyComponent key={survey.id} survey={survey} />
        ))}
      </ul>
    </div>
  )
}
