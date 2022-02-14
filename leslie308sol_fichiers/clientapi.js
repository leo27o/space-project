function bridgeToCpp(funcCode, params) {
    params['function'] = funcCode;
    return bridgeFunc(params);
};

var pepperi = {
    log: function (params) {
        bridgeToCpp('pepperi.log', params);
    },
    api: {
        transactions: {
            getValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.api.transactions.getValueByFieldName', params);
            },
            setValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.api.transactions.setValueByFieldName', params);
            },
            get: function (params) {
                return bridgeToCpp('pepperi.api.transactions.get', params);
            },
            update: function (params) {
                return bridgeToCpp('pepperi.api.transactions.update', params);
            },
            search: function (params) {
                return bridgeToCpp('pepperi.api.transactions.search', params);
            },
            addLines: function (params) {
                return bridgeToCpp('pepperi.api.transactions.addLines', params);
            },
            removeLines: function (params) {
                return bridgeToCpp('pepperi.api.transactions.removeLines', params);
            }
        },
        activities: {
            getValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.api.activities.getValueByFieldName', params);
            },
            setValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.api.activities.setValueByFieldName', params);
            },
            get: function (params) {
                return bridgeToCpp('pepperi.api.activities.get', params);
            },
            update: function (params) {
                return bridgeToCpp('pepperi.api.activities.update', params);
            },
            search: function (params) {
                return bridgeToCpp('pepperi.api.activities.search', params);
            }
        },
        accounts: {
            getValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.api.accounts.getValueByFieldName', params);
            },
            setValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.api.accounts.setValueByFieldName', params);
            },
            get: function (params) {
                return bridgeToCpp('pepperi.api.accounts.get', params);
            },
            update: function (params) {
                return bridgeToCpp('pepperi.api.accounts.update', params);
            },
            search: function (params) {
                return bridgeToCpp('pepperi.api.accounts.search', params);
            }
        },
        transactionLines: {
            getValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.api.transactionLines.getValueByFieldName', params);
            },
            setValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.api.transactionLines.setValueByFieldName', params);
            },
            get: function (params) {
                return bridgeToCpp('pepperi.api.transactionLines.get', params);
            },
            update: function (params) {
                return bridgeToCpp('pepperi.api.transactionLines.update', params);
            },
            search: function (params) {
                return bridgeToCpp('pepperi.api.transactionLines.search', params);
            }
        },
        users: {
            get: function (params) {
                return bridgeToCpp('pepperi.api.users.get', params);
            },
            search: function (params) {
                return bridgeToCpp('pepperi.api.users.search', params);
            }
        },
        contacts: {
            get: function (params) {
                return bridgeToCpp('pepperi.api.contacts.get', params);
            },
            update: function (params) {
                return bridgeToCpp('pepperi.api.contacts.update', params);
            },
            search: function (params) {
                return bridgeToCpp('pepperi.api.contacts.search', params);
            }
        },
        items: {
            get: function (params) {
                return bridgeToCpp('pepperi.api.items.get', params);
            },
            search: function (params) {
                return bridgeToCpp('pepperi.api.items.search', params);
            }
        },
        catalogs: {
            get: function (params) {
                return bridgeToCpp('pepperi.api.catalogs.get', params);
            },
            search: function (params) {
                return bridgeToCpp('pepperi.api.catalogs.search', params);
            }
        },
        allActivities: {
            search: function (params) {
                return bridgeToCpp('pepperi.api.allActivities.search', params);
            }
        },
        attachments: {
            get: function (params) {
                return bridgeToCpp('pepperi.api.attachments.get', params);
            },
            search: function (params) {
                return bridgeToCpp('pepperi.api.attachments.search', params);
            }
        },
        userDefinedTables: {
            get: function (params) {
                return bridgeToCpp('pepperi.api.userDefinedTables.get', params);
            },
            upsert: function (params) {
                return bridgeToCpp('pepperi.api.userDefinedTables.upsert', params);
            },
            getList: function (params) {
                return bridgeToCpp('pepperi.api.userDefinedTables.getList', params);
            }
        },
        adal: {
            get: function (params) {
                return bridgeToCpp('pepperi.api.adal.get', params);
            },
            getList: function (params) {
                return bridgeToCpp('pepperi.api.adal.getList', params);
            }
        },
        transactionScopeItems: {
            get: function (params) {
                return bridgeToCpp('pepperi.api.transactionScopeItems.get', params);
            },
            search: function (params) {
                return bridgeToCpp('pepperi.api.transactionScopeItems.search', params);
            },
            update: function (params) {
                return bridgeToCpp('pepperi.api.transactionScopeItems.update', params);
            }
        }
    },
    app: {
        transactions: {
            getValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.app.transactions.getValueByFieldName', params);
            },
            setValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.app.transactions.setValueByFieldName', params);
            },
            update: function (params) {
                return bridgeToCpp('pepperi.app.transactions.update', params);
            },
            add: function (params) {
                return bridgeToCpp('pepperi.app.transactions.add', params);
            },
            addLines: function (params) {
                return bridgeToCpp('pepperi.app.transactions.addLines', params);
            },
            removeLines: function (params) {
                return bridgeToCpp('pepperi.app.transactions.removeLines', params);
            }
        },
        activities: {
            getValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.app.activities.getValueByFieldName', params);
            },
            setValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.app.activities.setValueByFieldName', params);
            },
            update: function (params) {
                return bridgeToCpp('pepperi.app.activities.update', params);
            },
            add: function (params) {
                return bridgeToCpp('pepperi.app.activities.add', params);
            }
        },
        accounts: {
            getValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.app.accounts.getValueByFieldName', params);
            },
            setValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.app.accounts.setValueByFieldName', params);
            },
            update: function (params) {
                return bridgeToCpp('pepperi.app.accounts.update', params);
            },
            add: function (params) {
                return bridgeToCpp('pepperi.app.accounts.add', params);
            }
        },
        transactionLines: {
            getValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.app.transactionLines.getValueByFieldName', params);
            },
            setValueByFieldName: function (params) {
                return bridgeToCpp('pepperi.app.transactionLines.setValueByFieldName', params);
            },
            update: function (params) {
                return bridgeToCpp('pepperi.app.transactionLines.update', params);
            }
        },
        contacts: {
            update: function (params) {
                return bridgeToCpp('pepperi.app.contacts.update', params);
            },
            add: function (params) {
                return bridgeToCpp('pepperi.app.contacts.add', params);
            }
        },
        transactionScopeItems: {
            update: function (params) {
                return bridgeToCpp('pepperi.app.transactionScopeItems.update', params);
            }
        },
        getContext: function (params) {
            return bridgeToCpp('pepperi.app.getContext', params);
        }
    },
    utils: {
        jsonFilter2SQL: function (params) {
            return bridgeToCpp('pepperi.utils.jsonFilter2SQL', params);
        }
    },
    internal: {
        webAPI: function (params) {
            return bridgeToCpp('pepperi.internal.webAPI', params);
        }
    }
};
//)"
