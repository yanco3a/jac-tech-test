// NPM dependencies
import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";

// Local dependencies
import NavBar from "../../src/views/NavBar.vue";

describe("NavBar.vue", () => {
  it("renders navbar on page", () => {
    const wrapper = shallowMount(NavBar);
    expect(wrapper.attributes().id).to.eql("nav-bar");
    expect(wrapper.attributes("id")).to.eql("nav-bar");
  });
});
