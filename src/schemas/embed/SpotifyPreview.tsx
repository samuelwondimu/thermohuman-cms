import { Flex, Text } from '@sanity/ui'
import { Spotify } from 'react-spotify-embed'
import type { PreviewProps } from 'sanity'

export function SpotifyPreview(props: PreviewProps) {
  const { title: url } = props

  return (
    <Flex padding={3} align="center" justify="center">
      {typeof url === 'string' ? (
        <Spotify link={url} wide />
      ) : (
        <Text>Add a Spotify URL</Text>
      )}
    </Flex>
  )
}
