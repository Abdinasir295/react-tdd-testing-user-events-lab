import { logRoles, render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

test("displays a top-level heading with the text `Hi, i'm _____", ()=>{
    //Arrange
    const { container } = render(<App />)
    logRoles(container)
    //Act
    const topLevelHeading =  screen.getByRole("heading",{
        name: /hi, i'm/i,
        exact: false,
        level: 1,
    })
    //Assert
    expect(topLevelHeading).toBeInTheDocument();
})

test("displays a profile picture using image tag",()=>{
    //Arrange
    render(<App />)
    //Act
    const image = screen.getByRole("img", {
        name: /profile/,
    });
    //Assert
    expect(image).toBeInTheDocument();
})

test("A heading with a with a text `About me`",()=>{
    //Arrange
    render(<App />)

    //act  and assert
    expect(screen.getByText(/about me/i)).toBeInTheDocument();
})

test("display a paragraph with biography", ()=>{
    //Arrange
    render(<App />)

    expect(screen.queryByText(/i am a software engineering student at moringa school/i)).toBeInTheDocument();
})
test("expect to have a link to github",()=>{
    render(<App />)
     const link = screen.getByRole('link',{
        name: /Github/i,
     })
     expect(link).toBeInTheDocument()

})
test("expect to have a link to linkedIn",()=>{
        render(<App />)
     const linkedIn = screen.getByRole('link',{
        name: /linkedIn/i,
     })
     expect(linkedIn).toBeInTheDocument()
    
})

// Your tests here