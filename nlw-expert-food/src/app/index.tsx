import { Header } from '@/components/header'
import { View, Text } from 'react-native'

export default function Home() {
  return (
    <View className="flex-1 pt-8">
      <Header title="Place your order" cartItemsQuantity={5} />
    </View>
  )
}