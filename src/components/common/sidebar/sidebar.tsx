'use client';

import * as React from 'react';
import { sidebarMaterials } from '@/icon/material';

export default function SideBar() {
  const [drawer, setDrawer] = React.useState<boolean>(false);
  const [dishExpand, setDishExpand] = React.useState<boolean>(false);
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawer(open);
  };

  const handleClickDishExpand = () => {
    setDishExpand(!dishExpand);
  };

  const list = (
    <sidebarMaterials.Box sx={{ width: 240 }} role="presentation" onKeyDown={toggleDrawer(false)}>
      <sidebarMaterials.Avatar className="mx-auto mt-6" />
      <p className="text-center mt-2">リーバル</p>
      <sidebarMaterials.List>
        {[
          { icon: <sidebarMaterials.HomeIcon />, text: 'ホーム' },
          { icon: <sidebarMaterials.BookmarkBorderIcon />, text: '保存レシピ' },
          { icon: <sidebarMaterials.PersonOutlineIcon />, text: 'プロフィール' },
        ].map((array) => (
          <sidebarMaterials.ListItem key={array.text} disablePadding onClick={toggleDrawer(false)}>
            <sidebarMaterials.ListItemButton>
              <sidebarMaterials.ListItemIcon>{array.icon}</sidebarMaterials.ListItemIcon>
              <sidebarMaterials.ListItemText primary={array.text} />
            </sidebarMaterials.ListItemButton>
          </sidebarMaterials.ListItem>
        ))}
      </sidebarMaterials.List>
      <sidebarMaterials.Divider />
      <sidebarMaterials.List>
        <sidebarMaterials.ListItem key={'カテゴリ'} disablePadding>
          <sidebarMaterials.ListItemButton onClick={handleClickDishExpand}>
            <sidebarMaterials.ListItemIcon>
              <sidebarMaterials.RestaurantIcon />
            </sidebarMaterials.ListItemIcon>
            <sidebarMaterials.ListItemText primary={'カテゴリ'} />
            {dishExpand ? <sidebarMaterials.ExpandLess /> : <sidebarMaterials.ExpandMore />}
          </sidebarMaterials.ListItemButton>
        </sidebarMaterials.ListItem>
        <sidebarMaterials.Collapse in={dishExpand} timeout="auto" unmountOnExit>
          <sidebarMaterials.List component="div" disablePadding>
            {[
              { icon: <sidebarMaterials.Avatar sx={{ width: 24, height: 24 }} />, text: '肉' },
              { icon: <sidebarMaterials.Avatar sx={{ width: 24, height: 24 }} />, text: '魚' },
              { icon: <sidebarMaterials.Avatar sx={{ width: 24, height: 24 }} />, text: '野菜' },
            ].map((array) => (
              <sidebarMaterials.ListItem key={array.text} disablePadding>
                <sidebarMaterials.ListItemButton sx={{ pl: 4 }}>
                  <sidebarMaterials.ListItemIcon>{array.icon}</sidebarMaterials.ListItemIcon>
                  <sidebarMaterials.ListItemText primary={array.text} />
                </sidebarMaterials.ListItemButton>
              </sidebarMaterials.ListItem>
            ))}
          </sidebarMaterials.List>
        </sidebarMaterials.Collapse>
      </sidebarMaterials.List>
      <sidebarMaterials.Divider />
      <sidebarMaterials.List>
        {[
          { icon: <sidebarMaterials.PrivacyTip />, text: 'プライバシーポリシー' },
          { icon: <sidebarMaterials.GavelOutlined />, text: '利用規約' },
        ].map((array) => (
          <sidebarMaterials.ListItem key={array.text} disablePadding onClick={toggleDrawer(false)}>
            <sidebarMaterials.ListItemButton>
              <sidebarMaterials.ListItemIcon>{array.icon}</sidebarMaterials.ListItemIcon>
              <sidebarMaterials.ListItemText primary={array.text} />
            </sidebarMaterials.ListItemButton>
          </sidebarMaterials.ListItem>
        ))}
      </sidebarMaterials.List>
    </sidebarMaterials.Box>
  );

  return (
    <div>
      <sidebarMaterials.IconButton
        onClick={toggleDrawer(true)}
        sx={{
          color: 'gray',
          border: '1px solid #bbb',
          borderRadius: '8px',
          width: '40px',
          height: '35px',
          marginLeft: '5px',
          marginTop: '2px',
        }}
      >
        {' '}
        {/* <Button />だとwidthの幅の最小値がそもそもでかい。 */}
        <sidebarMaterials.MenuIcon />
      </sidebarMaterials.IconButton>
      <sidebarMaterials.Drawer anchor={'left'} open={drawer} onClose={toggleDrawer(false)}>
        {list}
      </sidebarMaterials.Drawer>
    </div>
  );
}
