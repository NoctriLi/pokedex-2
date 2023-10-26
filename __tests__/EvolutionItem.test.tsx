import { render, screen } from "@testing-library/react";
import EvolutionItem from "@/app/components/EvolutionItem";
import "@testing-library/jest-dom";

const dummy = [
  [
    {
      name: 'dreepy',
      number: '885',
      picUrl: 
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png',
      evolutionDetails: null
    }
  ],
  [
    {
      name: 'drakloak',
      number: '886',
      picUrl: 
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png',
      evolves_to: [],
      evolutionDetails: [ [ 'Min level: 50' ], 'level up' ]
    }
  ],
  [
    {
      name: 'dragapult',
      number: '887',
      picUrl: 
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png',
      evolves_to: undefined,
      evolutionDetails: [ [ 'Min level: 60' ], 'level up' ]
    }
  ]
]



describe("MoveTable", () => {
  it("should have Dreepy", async () => {
    await render(<EvolutionItem evolution={dummy[0]} num={0} />);

    const myElement = screen.getByText("dreepy");

    expect(myElement).toBeInTheDocument();
 
  
    await render(<EvolutionItem evolution={dummy[1]} num={1} />);

    const myElement2 = screen.getByText("drakloak");

    expect(myElement2).toBeInTheDocument();
  
  
    await render(<EvolutionItem evolution={dummy[2]} num={2} />);

    const myElement3 = screen.getByText("dragapult");

    expect(myElement3).toBeInTheDocument();
  });

});
