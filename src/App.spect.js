import { shallow } from "enzyme/build";
import App from "./App";

describe('app starting config', () => {

  it('should first', () => {
    let wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })
})