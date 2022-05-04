import { shallow } from "enzyme/build";
import { CalendarApp } from "./CalendarApp";

describe('CalendarApp::::', () => {
  it('render CalendarApp main component component properly', () => {
    let wrapper = shallow(<CalendarApp />);
    expect(wrapper).toMatchSnapshot();
  })
})