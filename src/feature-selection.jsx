import React from 'react';
/**
 * TODO 元素选中效果
 * 1. 根据鼠标位置出现选择框
 * 2. 当选择框选中box时，box实现变虚线
 * 3. 鼠标拖动时，样式为圆形
 * 4. 打印出选择的参数
 **/
import './index.less';
export const FeatureSelection = (props) => {
  const { setPos, setSize } = props;

  const mouseEnterHandle = (e) => {
    console.log('enter', e);
    const { pageX, pafeY } = e;
    setPos([pageX, pafeY]);
  };
  const mouseMoveHandle = (e) => {
    console.log('move', e);
  };

  return (
    <div
      className="draw-box"
      onMouseEnter={mouseEnterHandle}
      onMouseMove={mouseMoveHandle}
    ></div>
  );
};
