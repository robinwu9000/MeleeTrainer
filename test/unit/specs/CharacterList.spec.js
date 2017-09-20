import Vue from 'vue'
import store  from '@/vuex/store'
import CharacterList from '@/components/CharacterList'

describe('CharacterList.vue', () => {
  const Constructor = Vue.extend(CharacterList)
  const vm = new Constructor({store}).$mount()
  
  it('should render all characters', () => {
    expect(vm.$el.children.length).to.equal(5);
  })
})
