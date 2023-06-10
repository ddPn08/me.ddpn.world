import { Timeline } from '@/components/timeline'
import { createTimeline } from '@/utils/timeline'

const TimelinePage = async () => {
  const timeline = await createTimeline()
  return (
    <div>
      <Timeline timeline={timeline} />
    </div>
  )
}

export default TimelinePage

export const revalidate = 60 * 60 * 24 * 7

export const runtime = 'edge'
