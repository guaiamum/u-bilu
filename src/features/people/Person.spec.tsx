import { render } from '@testing-library/react';
import Person from './Person';

const person = {
  id: '0ab',
  name: 'Person Name'
}

describe('Person', () => {
  it('should render article with name', () => {
    const { getByText } = render(<Person {...person} />)

    expect(getByText('Person Name')).toBeInTheDocument()
  })
})
