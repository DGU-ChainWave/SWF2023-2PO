// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import './ERC721Connector.sol';

contract KryptoBirdz is ERC721Connector {

  // 배열 -> 민팅작업으로 생긴 크립토버즈가 저장됨
  string[] public kryptoBirdz;

  mapping(string => bool) _kryptoBirdzExists;

  // ERC721 -> tokenId 민트
  // KryptoBirdz -> 사진 민트
  function mint(address to, string memory _kryptoBird) public {

    require(!_kryptoBirdzExists[_kryptoBird], 'Error - kryptoBird already exists');
    // this is deprecated - uint _id = kryptoBirdz.push(_kryptoBird);
    kryptoBirdz.push(_kryptoBird);
    uint _id = kryptoBirdz.length - 1;

    // .push no longer returns the length but a ref to the added element
    _mint(to, _id);

    _kryptoBirdzExists[_kryptoBird] = true;
  }

  // initialize this contract to inherit
  // name and symbol from ERC721Metadata so that
  // the name is KryptoBirdz and the symbol is KBZ

  constructor() ERC721Connector("KryptoBirdz", "KBZ") {
  }

}