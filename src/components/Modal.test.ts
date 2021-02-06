import {DOMWrapper, mount} from "@vue/test-utils";
import Modal from "./Modal.vue";

describe('vueWrapper', () => {
    it('should display the slot content', async () => {
        const wrapper = mount(Modal, {
            slots: {
                default: '<div id="slot-content" />'
            }
        });

        expect(wrapper.find('#slot-content').exists()).toBe(false)
        // @ts-expect-error
        await wrapper.vm.toggleVisibility()
        console.log(wrapper.html()) // <!--teleport start--><!--teleport end-->
        expect(wrapper.find('#slot-content').exists()).toBe(true) // fails
    });
});

describe('domWrapper', () => {
    it('should display the slot content', async() => {
        const wrapper = mount(Modal, {
            slots: {
                default: '<div id="slot-content">content</div>'
            }
        });

        // @ts-expect-error
        await wrapper.vm.toggleVisibility()

        const domWrapper = new DOMWrapper(document.querySelector('#slot-content')!);
        expect(domWrapper.text()).toBe('content') // passes
        // The DOMWrapper solution means we need to work with the DOMWrapper to test and the VueWrapper to setProps etc
    });
});

describe('proposed api', () => {
    it('should display the slot content', () => {
        const wrapper = mount(Modal, {
            slots: {
                default: '<div id="slot-content" />'
            },
            // optional property
            teleportTarget: document.body // or 'body' (string that you would pass to the querySelector method)
        });
        // a factor to consider is: https://v3.vuejs.org/guide/teleport.html#using-multiple-teleports-on-the-same-target
        // however I don't see this as an issue given when you call .find() etc and you're full mounting,
        // it should find the the content within the child components too

        expect(wrapper.find('#slot-content').exists()).toBe(false)
        // @ts-expect-error
        wrapper.vm.toggleVisibility()
        console.log(wrapper.html()) // the teleported component's html
        expect(wrapper.find('#slot-content').exists()).toBe(true) // expect true

        // additional api:
        wrapper.setTeleportTarget('.custom-target');
    });
});
