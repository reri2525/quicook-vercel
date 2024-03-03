import React from 'react';
import { searchBarMaterials } from '@/icon/material';

/*
 SearchBarコンポーネントは、情報検索に関連するタスクを実行するためのフロントエンドUI（ユーザーインターフェース）構成要素です。
 ユーザーは、料理名や食材などのキーワードを入力し、アプリケーション内のデータベースやリソース内での検索を開始できます。
 このコンポーネントは、検索キーワードの入力を受け取り、それをデータベースクエリや検索エンジンに送信し、該当する情報をフィルタリングする役割を果たします。
 同時に、検索アクションをトリガーするボタンも提供されます。
 これにより、ユーザーは複雑なデータ検索プロセスを容易に実行し、必要な情報を迅速に取得できます。
 SearchBarコンポーネントは、情報科学の文脈における情報検索の概念と、フロントエンド開発におけるユーザーインターフェースの設計原則を結びつける役割を果たします。
 使用例: <SearchBar />
*/

export default function SearchBar() {
  return (
    <searchBarMaterials.Paper
      component="form"
      className="py-0.5 flex items-center w-52 sm:w-96  mx-auto rounded-xl"
    >
      <searchBarMaterials.InputBase className="ml-1 flex-1" placeholder="料理名・食材で検索" />
      <searchBarMaterials.IconButton type="button" className="p-2">
        <searchBarMaterials.SearchIcon />
      </searchBarMaterials.IconButton>
    </searchBarMaterials.Paper>
  );
}
