import { useFetch } from './fetch'
import { ref, Ref } from 'vue'

export async function useUsers(): Promise<any> {
  const loading: Ref<boolean> = ref(false)
  const { response: users, request } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  )

  if (!loading.value) {
    await request()
    loading.value = true
  }

  return { users }
}
