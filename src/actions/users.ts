'use server'

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string

  // Database logic here
  return { success: true, data: { name, email } }
}
