import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4 </h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <div className='mt-4 flex items-center gap-4'>
        <Button color={'light'} variant={'ghost'}>
          Ghost Light
        </Button>
        <Button color={'dark'} shape={'circular'} variant={'ghost'}>
          Ghost Light
        </Button>
        <Button color={'light'} shape={'circular'} variant={'outlined'}>
          Outlined Light
        </Button>
        <Button color={'dark'} variant={'outlined'}>
          Outlined Dark
        </Button>
        <Button shape={'circular'} variant={'gradient'}>
          Gradient
        </Button>
        <Button shape={'rounded'} variant={'gradient'}>
          Gradient
        </Button>
      </div>
      <div className='mt-4 flex items-center gap-4'>
        <Badge color={'light'} variant={'ghost'}>
          Light
        </Badge>
        <Badge color={'dark'} variant={'ghost'}>
          Dark
        </Badge>
        <Badge variant={'gradient'}>Gradient</Badge>
      </div>
    </div>
  );
}
