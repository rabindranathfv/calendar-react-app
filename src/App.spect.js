import { shallow } from "enzyme/build";
import App from "./App";

describe('App::::', () => {

  it('render App component properly', () => {
    let wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })
})