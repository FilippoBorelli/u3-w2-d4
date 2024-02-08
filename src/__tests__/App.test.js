import { render, screen, fireEvent, } from '@testing-library/react'
import App from '../App'

describe("Title", () => {
    it("correctly mounts the heading", () => {
        render(<App />)
        const h1 = screen.getByText(/Benvenuti in EpiBooks!/i)
        expect (h1).toBeInTheDocument()
    })
    // it("correctly mounts the cards", () => {
    //     render(<App />)
    //     const allTheCards = screen.getAllByTestId('Cards')
    //     expect(allTheCards).toBeInTheDocument()
    // })
})

describe("Component CommentArea", () => {
    it("correctly mounts the Component CommentArea", () => {
        render(<App />)
        const CommentArea = screen.isCompositeComponent(CommentArea)
        expect (CommentArea).toBeInTheDocument()
    })
})