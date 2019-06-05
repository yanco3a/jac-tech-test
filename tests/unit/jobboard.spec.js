// NPM dependencies
import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";

// Local dependencies
import JobBoard from "../../src/views/JobBoard.vue"

describe("JobBoard.vue", () => {
  it("renders H3 header on page", () => {
    const msg = "Job Board";
    const wrapper = shallowMount(JobBoard);
    const header3 = wrapper.find("h3");
    expect(header3.text()).to.be.eq(msg);
  });
});
