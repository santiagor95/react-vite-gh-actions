import { render, screen } from '@testing-library/react'
import { test, expect } from "vitest";

import { RickAndMortyCharacters } from './RickAndMortyCharacters'

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<RickAndMortyCharacters/>)

  // ASSERT
  expect(screen.getByText('Loading...'))
})