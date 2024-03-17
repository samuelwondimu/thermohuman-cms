import { Flex, Text } from '@sanity/ui'
import Vimeo from '@u-wave/react-vimeo'
import type { PreviewProps } from 'sanity'

export function VimeoPreview(props: PreviewProps) {
  const { title: url } = props

  return (
    <Flex padding={3} align="center" justify="center">
      {typeof url === 'string' ? (
        <Vimeo video={url} />
      ) : (
        <Text>Add a Viemo URL</Text>
      )}
    </Flex>
  )
}
