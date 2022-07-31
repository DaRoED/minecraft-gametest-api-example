import { world } from 'mojang-minecraft';
import { ModalFormData } from 'mojang-minecraft-ui';

world.events.beforeItemUse.subscribe(item => {
  if (item.item.id === 'minecraft:gold_ingot') {
    const form = new ModalFormData()
        .title('§l테스트')
        .dropdown('§l테스트', ['테스트1', '테스트2', '테스트4'])
        .textField('§lLabel', '§lplaceholderText')
        .show(item.source);
  }
})
