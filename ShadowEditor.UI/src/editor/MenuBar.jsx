import PropTypes from 'prop-types';
import _MenuBar from '../menu/MenuBar.jsx';
import MenuItem from '../menu/MenuItem.jsx';

import SceneMenu from './menu/SceneMenu.jsx';
import EditMenu from './menu/EditMenu.jsx';
import TwoDMenu from './menu/TwoDMenu.jsx';
import GeometryMenu from './menu/GeometryMenu.jsx';
import LightMenu from './menu/LightMenu.jsx';
import AssetsMenu from './menu/AssetsMenu.jsx';
import ComponentMenu from './menu/ComponentMenu.jsx';

/**
 * 菜单栏
 * @author tengge / https://github.com/tengge1
 * @property {String} className 样式类
 * @property {Object} style 样式
 */
class MenuBar extends React.Component {
    render() {
        const { className, style } = this.props;

        return <_MenuBar className={className} style={style}>
            <SceneMenu />
            <EditMenu />
            <TwoDMenu />
            <GeometryMenu />
            <LightMenu />
            <AssetsMenu />
            <ComponentMenu />
            <MenuItem title={'Play'}></MenuItem>
            <MenuItem title={'Tool'}></MenuItem>
            <MenuItem title={'Options'}></MenuItem>
            <MenuItem title={'Help'}></MenuItem>
        </_MenuBar>;
    }
}

MenuBar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

export default MenuBar;