import React from 'react';
import { headerMaterials } from '@/icon/material';
import SearchBar from '@/components/parts/searchbar/searchBar';

/*
 ヘッダーコンポーネントは、アプリケーションのフロントエンドにおいて、エクスペリエンスの根幹をなすビューレイヤーとして位置づけられます。
 この高次の抽象化された構成要素は、UI/UXデザインにおいて注目すべきトップレベルのユーザーインタラクションエリアを形成し、
 アプリケーションのメインナビゲーション、認証、および検索機能などのコア機能を提供します。
 加えて、ヘッダーコンポーネントには、アプリケーションのアイデンティティを明確に示すタイトルが埋め込まれています。
 さらに、ユーザーの認証状態に基づいて、適切なユーザーエクスペリエンスを提供するためのダイナミックな挙動が組み込まれています。
 これにより、アプリケーションの利便性とセキュリティが向上し、ユーザーのエンゲージメントが促進されます。
*/

export default function Header() {
  return (
    <header className="bg-yellow-300 w-full h-14 flex items-center relative">
      {/* <headerMaterials.MenuIcon className="block sm:hidden text-gray-500 ml-3 border border-gray-500 rounded" /> */}
      {/* これsidebarに書く */}
      <h1 className="text-2xl sm:text-4xl font-serif ml-1 fixed">Quicook</h1>
      {/* 絶対値をタイトルとログインボタンに設定してることでsearchBarコンポーネントにmx-autoを指定している時にちゃんと中央に配置される。 */}
      <SearchBar />
      <headerMaterials.Button variant="text" className="absolute right-0 h-14 text-lg sm:text-xl">
        <headerMaterials.LoginIcon className="text-lg sm:text-xl" />
        ログイン
      </headerMaterials.Button>
    </header>
  );
}
