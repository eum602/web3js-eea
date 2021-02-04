module.exports = {
  orion: {
    node1: {
      publicKey: "ktmJYiWu6KVDcfaPicIYyltI7vM78hk2PgG5MZkOCHk="
    },
    node2: {
      publicKey: "gZT1F0kijyxk3KQ1uap5p6lBRYloB6O2U5JEl+zSaTM="
    },
    node3: {
      publicKey: "k2zXEin4Ip/qBGlRkJejnGWdP9cjkK+DAvKNW31L2C8="
    }
  },
  besu: {
    node1: {
      url: "http://localhost:8545",
      wsUrl: "ws://localhost:20001",
      privateKey:
        "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63"
    },
    node2: {
      url: "http://localhost:8546",
      wsUrl: "ws://localhost:20003",
      privateKey:
        "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"
    },
    node3: {
      url: "http://localhost:20004",
      wsUrl: "ws://localhost:20005",
      privateKey:
        "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f"
    }
  }
};
