import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { GithubIcon } from 'lucide-react'

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl'>Welcome</CardTitle>
        <CardDescription>Login with Github or Email</CardDescription>
      </CardHeader>
      <CardContent>
        <Button className='w-full' variant='outline'>
          {' '}
          <GithubIcon className='size-4' />
          Sign in with GitHub
        </Button>
      </CardContent>
    </Card>
  )
}
