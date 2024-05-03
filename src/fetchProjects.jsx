import { createClient } from 'contentful'

const client = createClient({
  space: '29ey31nn2eyr',
  environment: 'master',
  accessToken: 'uVLuxtimD6CMp6J5AWOz8jdFyN4Ln5u7mem5Om_PCMY',
})

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response))
