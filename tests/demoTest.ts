/**
 * @author: zhaojiaojiao
 * @file: description
 * @Date: 2021-10-19 15:07:04
 * @LastEditors: zhengchengjiang03
 * @LastEditTime: 2021-12-07 17:18:05
 */
import glob from 'glob';
import { render } from 'enzyme';

/** 公共的demo render测试用例 */
export default function demoTest(component: string) {
  const files = glob.sync(`./components/${component}/demo/*.md`);

  files.forEach((file) => {
    test(`渲染demo ${file} 通过`, () => {
      const demo = require(`.${file}`).default;
      const wrapper = render(demo);

      expect(wrapper).toMatchSnapshot();
    });
  });
}
