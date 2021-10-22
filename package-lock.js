{
    "requires": true,
    "lockfileVersion": 1,
    "dependencies": {
      "@babel/code-frame": {
        "version": "7.15.8",
        "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.15.8.tgz",
        "integrity": "sha512-2IAnmn8zbvC/jKYhq5Ki9I+DwjlrtMPUCH/CpHvqI4dNnlwHwsxoIhlc8WcYY5LSYknXQtAlFYuHfqAFCvQ4Wg==",
        "requires": {
          "@babel/highlight": "^7.14.5"
        }
      },
      "@babel/compat-data": {
        "version": "7.15.0",
        "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.15.0.tgz",
        "integrity": "sha512-0NqAC1IJE0S0+lL1SWFMxMkz1pKCNCjI4tr2Zx4LJSXxCLAdr6KyArnY+sno5m3yH9g737ygOyPABDsnXkpxiA=="
      },
      "@babel/core": {
        "version": "7.15.8",
        "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.15.8.tgz",
        "integrity": "sha512-3UG9dsxvYBMYwRv+gS41WKHno4K60/9GPy1CJaH6xy3Elq8CTtvtjT5R5jmNhXfCYLX2mTw+7/aq5ak/gOE0og==",
        "requires": {
          "@babel/code-frame": "^7.15.8",
          "@babel/generator": "^7.15.8",
          "@babel/helper-compilation-targets": "^7.15.4",
          "@babel/helper-module-transforms": "^7.15.8",
          "@babel/helpers": "^7.15.4",
          "@babel/parser": "^7.15.8",
          "@babel/template": "^7.15.4",
          "@babel/traverse": "^7.15.4",
          "@babel/types": "^7.15.6",
          "convert-source-map": "^1.7.0",
          "debug": "^4.1.0",
          "gensync": "^1.0.0-beta.2",
          "json5": "^2.1.2",
          "semver": "^6.3.0",
          "source-map": "^0.5.0"
        },
        "dependencies": {
          "source-map": {
            "version": "0.5.7",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
            "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
          }
        }
      },
      "@babel/generator": {
        "version": "7.15.8",
        "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.15.8.tgz",
        "integrity": "sha512-ECmAKstXbp1cvpTTZciZCgfOt6iN64lR0d+euv3UZisU5awfRawOvg07Utn/qBGuH4bRIEZKrA/4LzZyXhZr8g==",
        "requires": {
          "@babel/types": "^7.15.6",
          "jsesc": "^2.5.1",
          "source-map": "^0.5.0"
        },
        "dependencies": {
          "source-map": {
            "version": "0.5.7",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",
            "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="
          }
        }
      },
      "@babel/helper-compilation-targets": {
        "version": "7.15.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.15.4.tgz",
        "integrity": "sha512-rMWPCirulnPSe4d+gwdWXLfAXTTBj8M3guAf5xFQJ0nvFY7tfNAFnWdqaHegHlgDZOCT4qvhF3BYlSJag8yhqQ==",
        "requires": {
          "@babel/compat-data": "^7.15.0",
          "@babel/helper-validator-option": "^7.14.5",
          "browserslist": "^4.16.6",
          "semver": "^6.3.0"
        }
      },
      "@babel/helper-function-name": {
        "version": "7.15.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.15.4.tgz",
        "integrity": "sha512-Z91cOMM4DseLIGOnog+Z8OI6YseR9bua+HpvLAQ2XayUGU+neTtX+97caALaLdyu53I/fjhbeCnWnRH1O3jFOw==",
        "requires": {
          "@babel/helper-get-function-arity": "^7.15.4",
          "@babel/template": "^7.15.4",
          "@babel/types": "^7.15.4"
        }
      },
      "@babel/helper-get-function-arity": {
        "version": "7.15.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.15.4.tgz",
        "integrity": "sha512-1/AlxSF92CmGZzHnC515hm4SirTxtpDnLEJ0UyEMgTMZN+6bxXKg04dKhiRx5Enel+SUA1G1t5Ed/yQia0efrA==",
        "requires": {
          "@babel/types": "^7.15.4"
        }
      },
      "@babel/helper-hoist-variables": {
        "version": "7.15.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.15.4.tgz",
        "integrity": "sha512-VTy085egb3jUGVK9ycIxQiPbquesq0HUQ+tPO0uv5mPEBZipk+5FkRKiWq5apuyTE9FUrjENB0rCf8y+n+UuhA==",
        "requires": {
          "@babel/types": "^7.15.4"
        }
      },
      "@babel/helper-member-expression-to-functions": {
        "version": "7.15.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.15.4.tgz",
        "integrity": "sha512-cokOMkxC/BTyNP1AlY25HuBWM32iCEsLPI4BHDpJCHHm1FU2E7dKWWIXJgQgSFiu4lp8q3bL1BIKwqkSUviqtA==",
        "requires": {
          "@babel/types": "^7.15.4"
        }
      },
      "@babel/helper-module-imports": {
        "version": "7.15.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.15.4.tgz",
        "integrity": "sha512-jeAHZbzUwdW/xHgHQ3QmWR4Jg6j15q4w/gCfwZvtqOxoo5DKtLHk8Bsf4c5RZRC7NmLEs+ohkdq8jFefuvIxAA==",
        "requires": {
          "@babel/types": "^7.15.4"
        }
      },
      "@babel/helper-module-transforms": {
        "version": "7.15.8",
        "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.15.8.tgz",
        "integrity": "sha512-DfAfA6PfpG8t4S6npwzLvTUpp0sS7JrcuaMiy1Y5645laRJIp/LiLGIBbQKaXSInK8tiGNI7FL7L8UvB8gdUZg==",
        "requires": {
          "@babel/helper-module-imports": "^7.15.4",
          "@babel/helper-replace-supers": "^7.15.4",
          "@babel/helper-simple-access": "^7.15.4",
          "@babel/helper-split-export-declaration": "^7.15.4",
          "@babel/helper-validator-identifier": "^7.15.7",
          "@babel/template": "^7.15.4",
          "@babel/traverse": "^7.15.4",
          "@babel/types": "^7.15.6"
        }
      },
      "@babel/helper-optimise-call-expression": {
        "version": "7.15.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.15.4.tgz",
        "integrity": "sha512-E/z9rfbAOt1vDW1DR7k4SzhzotVV5+qMciWV6LaG1g4jeFrkDlJedjtV4h0i4Q/ITnUu+Pk08M7fczsB9GXBDw==",
        "requires": {
          "@babel/types": "^7.15.4"
        }
      },
      "@babel/helper-plugin-utils": {
        "version": "7.14.5",
        "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.14.5.tgz",
        "integrity": "sha512-/37qQCE3K0vvZKwoK4XU/irIJQdIfCJuhU5eKnNxpFDsOkgFaUAwbv+RYw6eYgsC0E4hS7r5KqGULUogqui0fQ=="
      },
      "@babel/helper-replace-supers": {
        "version": "7.15.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-replace-supers/-/helper-replace-supers-7.15.4.tgz",
        "integrity": "sha512-/ztT6khaXF37MS47fufrKvIsiQkx1LBRvSJNzRqmbyeZnTwU9qBxXYLaaT/6KaxfKhjs2Wy8kG8ZdsFUuWBjzw==",
        "requires": {
          "@babel/helper-member-expression-to-functions": "^7.15.4",
          "@babel/helper-optimise-call-expression": "^7.15.4",
          "@babel/traverse": "^7.15.4",
          "@babel/types": "^7.15.4"
        }
      },
      "@babel/helper-simple-access": {
        "version": "7.15.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.15.4.tgz",
        "integrity": "sha512-UzazrDoIVOZZcTeHHEPYrr1MvTR/K+wgLg6MY6e1CJyaRhbibftF6fR2KU2sFRtI/nERUZR9fBd6aKgBlIBaPg==",
        "requires": {
          "@babel/types": "^7.15.4"
        }
      },
      "@babel/helper-split-export-declaration": {
        "version": "7.15.4",
        "resolved": "https://registry.npmjs.org/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.15.4.tgz",
        "integrity": "sha512-HsFqhLDZ08DxCpBdEVtKmywj6PQbwnF6HHybur0MAnkAKnlS6uHkwnmRIkElB2Owpfb4xL4NwDmDLFubueDXsw==",
        "requires": {
          "@babel/types": "^7.15.4"
        }
      },
      "@babel/helper-validator-identifier": {
        "version": "7.15.7",
        "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.15.7.tgz",
        "integrity": "sha512-K4JvCtQqad9OY2+yTU8w+E82ywk/fe+ELNlt1G8z3bVGlZfn/hOcQQsUhGhW/N+tb3fxK800wLtKOE/aM0m72w=="
      },
      "@babel/helper-validator-option": {
        "version": "7.14.5",
        "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.14.5.tgz",
        "integrity": "sha512-OX8D5eeX4XwcroVW45NMvoYaIuFI+GQpA2a8Gi+X/U/cDUIRsV37qQfF905F0htTRCREQIB4KqPeaveRJUl3Ow=="
      },
      "@babel/helpers": {
        "version": "7.15.4",
        "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.15.4.tgz",
        "integrity": "sha512-V45u6dqEJ3w2rlryYYXf6i9rQ5YMNu4FLS6ngs8ikblhu2VdR1AqAd6aJjBzmf2Qzh6KOLqKHxEN9+TFbAkAVQ==",
        "requires": {
          "@babel/template": "^7.15.4",
          "@babel/traverse": "^7.15.4",
          "@babel/types": "^7.15.4"
        }
      },
      "@babel/highlight": {
        "version": "7.14.5",
        "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.14.5.tgz",
        "integrity": "sha512-qf9u2WFWVV0MppaL877j2dBtQIDgmidgjGk5VIMw3OadXvYaXn66U1BFlH2t4+t3i+8PhedppRv+i40ABzd+gg==",
        "requires": {
          "@babel/helper-validator-identifier": "^7.14.5",
          "chalk": "^2.0.0",
          "js-tokens": "^4.0.0"
        },
        "dependencies": {
          "ansi-styles": {
            "version": "3.2.1",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
            "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
            "requires": {
              "color-convert": "^1.9.0"
            }
          },
          "chalk": {
            "version": "2.4.2",
            "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
            "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
            "requires": {
              "ansi-styles": "^3.2.1",
              "escape-string-regexp": "^1.0.5",
              "supports-color": "^5.3.0"
            }
          },
          "color-convert": {
            "version": "1.9.3",
            "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
            "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
            "requires": {
              "color-name": "1.1.3"
            }
          },
          "color-name": {
            "version": "1.1.3",
            "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
            "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU="
          },
          "has-flag": {
            "version": "3.0.0",
            "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
            "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0="
          },
          "supports-color": {
            "version": "5.5.0",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
            "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
            "requires": {
              "has-flag": "^3.0.0"
            }
          }
        }
      },
      "@babel/parser": {
        "version": "7.15.8",
        "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.15.8.tgz",
        "integrity": "sha512-BRYa3wcQnjS/nqI8Ac94pYYpJfojHVvVXJ97+IDCImX4Jc8W8Xv1+47enbruk+q1etOpsQNwnfFcNGw+gtPGxA=="
      },
      "@babel/plugin-syntax-async-generators": {
        "version": "7.8.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.8.4.tgz",
        "integrity": "sha512-tycmZxkGfZaxhMRbXlPXuVFpdWlXpir2W4AMhSJgRKzk/eDlIXOhb2LHWoLpDF7TEHylV5zNhykX6KAgHJmTNw==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-bigint": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-bigint/-/plugin-syntax-bigint-7.8.3.tgz",
        "integrity": "sha512-wnTnFlG+YxQm3vDxpGE57Pj0srRU4sHE/mDkt1qv2YJJSeUAec2ma4WLUnUPeKjyrfntVwe/N6dCXpU+zL3Npg==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-class-properties": {
        "version": "7.12.13",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-class-properties/-/plugin-syntax-class-properties-7.12.13.tgz",
        "integrity": "sha512-fm4idjKla0YahUNgFNLCB0qySdsoPiZP3iQE3rky0mBUtMZ23yDJ9SJdg6dXTSDnulOVqiF3Hgr9nbXvXTQZYA==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.12.13"
        }
      },
      "@babel/plugin-syntax-import-meta": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-import-meta/-/plugin-syntax-import-meta-7.10.4.tgz",
        "integrity": "sha512-Yqfm+XDx0+Prh3VSeEQCPU81yC+JWZ2pDPFSS4ZdpfZhp4MkFMaDC1UqseovEKwSUpnIL7+vK+Clp7bfh0iD7g==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-syntax-json-strings": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.8.3.tgz",
        "integrity": "sha512-lY6kdGpWHvjoe2vk4WrAapEuBR69EMxZl+RoGRhrFGNYVK8mOPAW8VfbT/ZgrFbXlDNiiaxQnAtgVCZ6jv30EA==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-logical-assignment-operators": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-logical-assignment-operators/-/plugin-syntax-logical-assignment-operators-7.10.4.tgz",
        "integrity": "sha512-d8waShlpFDinQ5MtvGU9xDAOzKH47+FFoney2baFIoMr952hKOLp1HR7VszoZvOsV/4+RRszNY7D17ba0te0ig==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-syntax-nullish-coalescing-operator": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-nullish-coalescing-operator/-/plugin-syntax-nullish-coalescing-operator-7.8.3.tgz",
        "integrity": "sha512-aSff4zPII1u2QD7y+F8oDsz19ew4IGEJg9SVW+bqwpwtfFleiQDMdzA/R+UlWDzfnHFCxxleFT0PMIrR36XLNQ==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-numeric-separator": {
        "version": "7.10.4",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-numeric-separator/-/plugin-syntax-numeric-separator-7.10.4.tgz",
        "integrity": "sha512-9H6YdfkcK/uOnY/K7/aA2xpzaAgkQn37yzWUMRK7OaPOqOpGS1+n0H5hxT9AUw9EsSjPW8SVyMJwYRtWs3X3ug==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.10.4"
        }
      },
      "@babel/plugin-syntax-object-rest-spread": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.8.3.tgz",
        "integrity": "sha512-XoqMijGZb9y3y2XskN+P1wUGiVwWZ5JmoDRwx5+3GmEplNyVM2s2Dg8ILFQm8rWM48orGy5YpI5Bl8U1y7ydlA==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-optional-catch-binding": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.8.3.tgz",
        "integrity": "sha512-6VPD0Pc1lpTqw0aKoeRTMiB+kWhAoT24PA+ksWSBrFtl5SIRVpZlwN3NNPQjehA2E/91FV3RjLWoVTglWcSV3Q==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-optional-chaining": {
        "version": "7.8.3",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-optional-chaining/-/plugin-syntax-optional-chaining-7.8.3.tgz",
        "integrity": "sha512-KoK9ErH1MBlCPxV0VANkXW2/dw4vlbGDrFgz8bmUsBGYkFRcbRwMh6cIJubdPrkxRwuGdtCk0v/wPTKbQgBjkg==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.8.0"
        }
      },
      "@babel/plugin-syntax-top-level-await": {
        "version": "7.14.5",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-top-level-await/-/plugin-syntax-top-level-await-7.14.5.tgz",
        "integrity": "sha512-hx++upLv5U1rgYfwe1xBQUhRmU41NEvpUvrp8jkrSCdvGSnM5/qdRMtylJ6PG5OFkBaHkbTAKTnd3/YyESRHFw==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.14.5"
        }
      },
      "@babel/plugin-syntax-typescript": {
        "version": "7.14.5",
        "resolved": "https://registry.npmjs.org/@babel/plugin-syntax-typescript/-/plugin-syntax-typescript-7.14.5.tgz",
        "integrity": "sha512-u6OXzDaIXjEstBRRoBCQ/uKQKlbuaeE5in0RvWdA4pN6AhqxTIwUsnHPU1CFZA/amYObMsuWhYfRl3Ch90HD0Q==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.14.5"
        }
      },
      "@babel/template": {
        "version": "7.15.4",
        "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.15.4.tgz",
        "integrity": "sha512-UgBAfEa1oGuYgDIPM2G+aHa4Nlo9Lh6mGD2bDBGMTbYnc38vulXPuC1MGjYILIEmlwl6Rd+BPR9ee3gm20CBtg==",
        "requires": {
          "@babel/code-frame": "^7.14.5",
          "@babel/parser": "^7.15.4",
          "@babel/types": "^7.15.4"
        }
      },
      "@babel/traverse": {
        "version": "7.15.4",
        "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.15.4.tgz",
        "integrity": "sha512-W6lQD8l4rUbQR/vYgSuCAE75ADyyQvOpFVsvPPdkhf6lATXAsQIG9YdtOcu8BB1dZ0LKu+Zo3c1wEcbKeuhdlA==",
        "requires": {
          "@babel/code-frame": "^7.14.5",
          "@babel/generator": "^7.15.4",
          "@babel/helper-function-name": "^7.15.4",
          "@babel/helper-hoist-variables": "^7.15.4",
          "@babel/helper-split-export-declaration": "^7.15.4",
          "@babel/parser": "^7.15.4",
          "@babel/types": "^7.15.4",
          "debug": "^4.1.0",
          "globals": "^11.1.0"
        }
      },
      "@babel/types": {
        "version": "7.15.6",
        "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.15.6.tgz",
        "integrity": "sha512-BPU+7QhqNjmWyDO0/vitH/CuhpV8ZmK1wpKva8nuyNF5MJfuRNWMc+hc14+u9xT93kvykMdncrJT19h74uB1Ig==",
        "requires": {
          "@babel/helper-validator-identifier": "^7.14.9",
          "to-fast-properties": "^2.0.0"
        }
      },
      "@bcoe/v8-coverage": {
        "version": "0.2.3",
        "resolved": "https://registry.npmjs.org/@bcoe/v8-coverage/-/v8-coverage-0.2.3.tgz",
        "integrity": "sha512-0hYQ8SB4Db5zvZB4axdMHGwEaQjkZzFjQiN9LVYvIFB2nSUHW9tYpxWriPrWDASIxiaXax83REcLxuSdnGPZtw=="
      },
      "@istanbuljs/load-nyc-config": {
        "version": "1.1.0",
        "resolved": "https://registry.npmjs.org/@istanbuljs/load-nyc-config/-/load-nyc-config-1.1.0.tgz",
        "integrity": "sha512-VjeHSlIzpv/NyD3N0YuHfXOPDIixcA1q2ZV98wsMqcYlPmv2n3Yb2lYP9XMElnaFVXg5A7YLTeLu6V84uQDjmQ==",
        "requires": {
          "camelcase": "^5.3.1",
          "find-up": "^4.1.0",
          "get-package-type": "^0.1.0",
          "js-yaml": "^3.13.1",
          "resolve-from": "^5.0.0"
        }
      },
      "@istanbuljs/schema": {
        "version": "0.1.3",
        "resolved": "https://registry.npmjs.org/@istanbuljs/schema/-/schema-0.1.3.tgz",
        "integrity": "sha512-ZXRY4jNvVgSVQ8DL3LTcakaAtXwTVUxE81hslsyD2AtoXW/wVob10HkOJ1X/pAlcI7D+2YoZKg5do8G/w6RYgA=="
      },
      "@jest/console": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/@jest/console/-/console-27.2.5.tgz",
        "integrity": "sha512-smtlRF9vNKorRMCUtJ+yllIoiY8oFmfFG7xlzsAE76nKEwXNhjPOJIsc7Dv+AUitVt76t+KjIpUP9m98Crn2LQ==",
        "requires": {
          "@jest/types": "^27.2.5",
          "@types/node": "*",
          "chalk": "^4.0.0",
          "jest-message-util": "^27.2.5",
          "jest-util": "^27.2.5",
          "slash": "^3.0.0"
        }
      },
      "@jest/core": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/@jest/core/-/core-27.2.5.tgz",
        "integrity": "sha512-VR7mQ+jykHN4WO3OvusRJMk4xCa2MFLipMS+43fpcRGaYrN1KwMATfVEXif7ccgFKYGy5D1TVXTNE4mGq/KMMA==",
        "requires": {
          "@jest/console": "^27.2.5",
          "@jest/reporters": "^27.2.5",
          "@jest/test-result": "^27.2.5",
          "@jest/transform": "^27.2.5",
          "@jest/types": "^27.2.5",
          "@types/node": "*",
          "ansi-escapes": "^4.2.1",
          "chalk": "^4.0.0",
          "emittery": "^0.8.1",
          "exit": "^0.1.2",
          "graceful-fs": "^4.2.4",
          "jest-changed-files": "^27.2.5",
          "jest-config": "^27.2.5",
          "jest-haste-map": "^27.2.5",
          "jest-message-util": "^27.2.5",
          "jest-regex-util": "^27.0.6",
          "jest-resolve": "^27.2.5",
          "jest-resolve-dependencies": "^27.2.5",
          "jest-runner": "^27.2.5",
          "jest-runtime": "^27.2.5",
          "jest-snapshot": "^27.2.5",
          "jest-util": "^27.2.5",
          "jest-validate": "^27.2.5",
          "jest-watcher": "^27.2.5",
          "micromatch": "^4.0.4",
          "rimraf": "^3.0.0",
          "slash": "^3.0.0",
          "strip-ansi": "^6.0.0"
        }
      },
      "@jest/environment": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/@jest/environment/-/environment-27.2.5.tgz",
        "integrity": "sha512-XvUW3q6OUF+54SYFCgbbfCd/BKTwm5b2MGLoc2jINXQLKQDTCS2P2IrpPOtQ08WWZDGzbhAzVhOYta3J2arubg==",
        "requires": {
          "@jest/fake-timers": "^27.2.5",
          "@jest/types": "^27.2.5",
          "@types/node": "*",
          "jest-mock": "^27.2.5"
        }
      },
      "@jest/fake-timers": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/@jest/fake-timers/-/fake-timers-27.2.5.tgz",
        "integrity": "sha512-ZGUb6jg7BgwY+nmO0TW10bc7z7Hl2G/UTAvmxEyZ/GgNFoa31tY9/cgXmqcxnnZ7o5Xs7RAOz3G1SKIj8IVDlg==",
        "requires": {
          "@jest/types": "^27.2.5",
          "@sinonjs/fake-timers": "^8.0.1",
          "@types/node": "*",
          "jest-message-util": "^27.2.5",
          "jest-mock": "^27.2.5",
          "jest-util": "^27.2.5"
        }
      },
      "@jest/globals": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/@jest/globals/-/globals-27.2.5.tgz",
        "integrity": "sha512-naRI537GM+enFVJQs6DcwGYPn/0vgJNb06zGVbzXfDfe/epDPV73hP1vqO37PqSKDeOXM2KInr6ymYbL1HTP7g==",
        "requires": {
          "@jest/environment": "^27.2.5",
          "@jest/types": "^27.2.5",
          "expect": "^27.2.5"
        }
      },
      "@jest/reporters": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/@jest/reporters/-/reporters-27.2.5.tgz",
        "integrity": "sha512-zYuR9fap3Q3mxQ454VWF8I6jYHErh368NwcKHWO2uy2fwByqBzRHkf9j2ekMDM7PaSTWcLBSZyd7NNxR1iHxzQ==",
        "requires": {
          "@bcoe/v8-coverage": "^0.2.3",
          "@jest/console": "^27.2.5",
          "@jest/test-result": "^27.2.5",
          "@jest/transform": "^27.2.5",
          "@jest/types": "^27.2.5",
          "@types/node": "*",
          "chalk": "^4.0.0",
          "collect-v8-coverage": "^1.0.0",
          "exit": "^0.1.2",
          "glob": "^7.1.2",
          "graceful-fs": "^4.2.4",
          "istanbul-lib-coverage": "^3.0.0",
          "istanbul-lib-instrument": "^4.0.3",
          "istanbul-lib-report": "^3.0.0",
          "istanbul-lib-source-maps": "^4.0.0",
          "istanbul-reports": "^3.0.2",
          "jest-haste-map": "^27.2.5",
          "jest-resolve": "^27.2.5",
          "jest-util": "^27.2.5",
          "jest-worker": "^27.2.5",
          "slash": "^3.0.0",
          "source-map": "^0.6.0",
          "string-length": "^4.0.1",
          "terminal-link": "^2.0.0",
          "v8-to-istanbul": "^8.1.0"
        }
      },
      "@jest/source-map": {
        "version": "27.0.6",
        "resolved": "https://registry.npmjs.org/@jest/source-map/-/source-map-27.0.6.tgz",
        "integrity": "sha512-Fek4mi5KQrqmlY07T23JRi0e7Z9bXTOOD86V/uS0EIW4PClvPDqZOyFlLpNJheS6QI0FNX1CgmPjtJ4EA/2M+g==",
        "requires": {
          "callsites": "^3.0.0",
          "graceful-fs": "^4.2.4",
          "source-map": "^0.6.0"
        }
      },
      "@jest/test-result": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/@jest/test-result/-/test-result-27.2.5.tgz",
        "integrity": "sha512-ub7j3BrddxZ0BdSnM5JCF6cRZJ/7j3wgdX0+Dtwhw2Po+HKsELCiXUTvh+mgS4/89mpnU1CPhZxe2mTvuLPJJg==",
        "requires": {
          "@jest/console": "^27.2.5",
          "@jest/types": "^27.2.5",
          "@types/istanbul-lib-coverage": "^2.0.0",
          "collect-v8-coverage": "^1.0.0"
        }
      },
      "@jest/test-sequencer": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/@jest/test-sequencer/-/test-sequencer-27.2.5.tgz",
        "integrity": "sha512-8j8fHZRfnjbbdMitMAGFKaBZ6YqvFRFJlMJzcy3v75edTOqc7RY65S9JpMY6wT260zAcL2sTQRga/P4PglCu3Q==",
        "requires": {
          "@jest/test-result": "^27.2.5",
          "graceful-fs": "^4.2.4",
          "jest-haste-map": "^27.2.5",
          "jest-runtime": "^27.2.5"
        }
      },
      "@jest/transform": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/@jest/transform/-/transform-27.2.5.tgz",
        "integrity": "sha512-29lRtAHHYGALbZOx343v0zKmdOg4Sb0rsA1uSv0818bvwRhs3TyElOmTVXlrw0v1ZTqXJCAH/cmoDXimBhQOJQ==",
        "requires": {
          "@babel/core": "^7.1.0",
          "@jest/types": "^27.2.5",
          "babel-plugin-istanbul": "^6.0.0",
          "chalk": "^4.0.0",
          "convert-source-map": "^1.4.0",
          "fast-json-stable-stringify": "^2.0.0",
          "graceful-fs": "^4.2.4",
          "jest-haste-map": "^27.2.5",
          "jest-regex-util": "^27.0.6",
          "jest-util": "^27.2.5",
          "micromatch": "^4.0.4",
          "pirates": "^4.0.1",
          "slash": "^3.0.0",
          "source-map": "^0.6.1",
          "write-file-atomic": "^3.0.0"
        }
      },
      "@jest/types": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/@jest/types/-/types-27.2.5.tgz",
        "integrity": "sha512-nmuM4VuDtCZcY+eTpw+0nvstwReMsjPoj7ZR80/BbixulhLaiX+fbv8oeLW8WZlJMcsGQsTmMKT/iTZu1Uy/lQ==",
        "requires": {
          "@types/istanbul-lib-coverage": "^2.0.0",
          "@types/istanbul-reports": "^3.0.0",
          "@types/node": "*",
          "@types/yargs": "^16.0.0",
          "chalk": "^4.0.0"
        }
      },
      "@sinonjs/commons": {
        "version": "1.8.3",
        "resolved": "https://registry.npmjs.org/@sinonjs/commons/-/commons-1.8.3.tgz",
        "integrity": "sha512-xkNcLAn/wZaX14RPlwizcKicDk9G3F8m2nU3L7Ukm5zBgTwiT0wsoFAHx9Jq56fJA1z/7uKGtCRu16sOUCLIHQ==",
        "requires": {
          "type-detect": "4.0.8"
        }
      },
      "@sinonjs/fake-timers": {
        "version": "8.0.1",
        "resolved": "https://registry.npmjs.org/@sinonjs/fake-timers/-/fake-timers-8.0.1.tgz",
        "integrity": "sha512-AU7kwFxreVd6OAXcAFlKSmZquiRUU0FvYm44k1Y1QbK7Co4m0aqfGMhjykIeQp/H6rcl+nFmj0zfdUcGVs9Dew==",
        "requires": {
          "@sinonjs/commons": "^1.7.0"
        }
      },
      "@tootallnate/once": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/@tootallnate/once/-/once-1.1.2.tgz",
        "integrity": "sha512-RbzJvlNzmRq5c3O09UipeuXno4tA1FE6ikOjxZK0tuxVv3412l64l5t1W5pj4+rJq9vpkm/kwiR07aZXnsKPxw=="
      },
      "@types/babel__core": {
        "version": "7.1.16",
        "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.1.16.tgz",
        "integrity": "sha512-EAEHtisTMM+KaKwfWdC3oyllIqswlznXCIVCt7/oRNrh+DhgT4UEBNC/jlADNjvw7UnfbcdkGQcPVZ1xYiLcrQ==",
        "requires": {
          "@babel/parser": "^7.1.0",
          "@babel/types": "^7.0.0",
          "@types/babel__generator": "*",
          "@types/babel__template": "*",
          "@types/babel__traverse": "*"
        }
      },
      "@types/babel__generator": {
        "version": "7.6.3",
        "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.6.3.tgz",
        "integrity": "sha512-/GWCmzJWqV7diQW54smJZzWbSFf4QYtF71WCKhcx6Ru/tFyQIY2eiiITcCAeuPbNSvT9YCGkVMqqvSk2Z0mXiA==",
        "requires": {
          "@babel/types": "^7.0.0"
        }
      },
      "@types/babel__template": {
        "version": "7.4.1",
        "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.1.tgz",
        "integrity": "sha512-azBFKemX6kMg5Io+/rdGT0dkGreboUVR0Cdm3fz9QJWpaQGJRQXl7C+6hOTCZcMll7KFyEQpgbYI2lHdsS4U7g==",
        "requires": {
          "@babel/parser": "^7.1.0",
          "@babel/types": "^7.0.0"
        }
      },
      "@types/babel__traverse": {
        "version": "7.14.2",
        "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.14.2.tgz",
        "integrity": "sha512-K2waXdXBi2302XUdcHcR1jCeU0LL4TD9HRs/gk0N2Xvrht+G/BfJa4QObBQZfhMdxiCpV3COl5Nfq4uKTeTnJA==",
        "requires": {
          "@babel/types": "^7.3.0"
        }
      },
      "@types/graceful-fs": {
        "version": "4.1.5",
        "resolved": "https://registry.npmjs.org/@types/graceful-fs/-/graceful-fs-4.1.5.tgz",
        "integrity": "sha512-anKkLmZZ+xm4p8JWBf4hElkM4XR+EZeA2M9BAkkTldmcyDY4mbdIJnRghDJH3Ov5ooY7/UAoENtmdMSkaAd7Cw==",
        "requires": {
          "@types/node": "*"
        }
      },
      "@types/istanbul-lib-coverage": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/@types/istanbul-lib-coverage/-/istanbul-lib-coverage-2.0.3.tgz",
        "integrity": "sha512-sz7iLqvVUg1gIedBOvlkxPlc8/uVzyS5OwGz1cKjXzkl3FpL3al0crU8YGU1WoHkxn0Wxbw5tyi6hvzJKNzFsw=="
      },
      "@types/istanbul-lib-report": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/@types/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
        "integrity": "sha512-plGgXAPfVKFoYfa9NpYDAkseG+g6Jr294RqeqcqDixSbU34MZVJRi/P+7Y8GDpzkEwLaGZZOpKIEmeVZNtKsrg==",
        "requires": {
          "@types/istanbul-lib-coverage": "*"
        }
      },
      "@types/istanbul-reports": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/@types/istanbul-reports/-/istanbul-reports-3.0.1.tgz",
        "integrity": "sha512-c3mAZEuK0lvBp8tmuL74XRKn1+y2dcwOUpH7x4WrF6gk1GIgiluDRgMYQtw2OFcBvAJWlt6ASU3tSqxp0Uu0Aw==",
        "requires": {
          "@types/istanbul-lib-report": "*"
        }
      },
      "@types/node": {
        "version": "16.10.9",
        "resolved": "https://registry.npmjs.org/@types/node/-/node-16.10.9.tgz",
        "integrity": "sha512-H9ReOt+yqIJPCutkTYjFjlyK6WEMQYT9hLZMlWtOjFQY2ItppsWZ6RJf8Aw+jz5qTYceuHvFgPIaKOHtLAEWBw=="
      },
      "@types/prettier": {
        "version": "2.4.1",
        "resolved": "https://registry.npmjs.org/@types/prettier/-/prettier-2.4.1.tgz",
        "integrity": "sha512-Fo79ojj3vdEZOHg3wR9ksAMRz4P3S5fDB5e/YWZiFnyFQI1WY2Vftu9XoXVVtJfxB7Bpce/QTqWSSntkz2Znrw=="
      },
      "@types/stack-utils": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/@types/stack-utils/-/stack-utils-2.0.1.tgz",
        "integrity": "sha512-Hl219/BT5fLAaz6NDkSuhzasy49dwQS/DSdu4MdggFB8zcXv7vflBI3xp7FEmkmdDkBUI2bPUNeMttp2knYdxw=="
      },
      "@types/yargs": {
        "version": "16.0.4",
        "resolved": "https://registry.npmjs.org/@types/yargs/-/yargs-16.0.4.tgz",
        "integrity": "sha512-T8Yc9wt/5LbJyCaLiHPReJa0kApcIgJ7Bn735GjItUfh08Z1pJvu8QZqb9s+mMvKV6WUQRV7K2R46YbjMXTTJw==",
        "requires": {
          "@types/yargs-parser": "*"
        }
      },
      "@types/yargs-parser": {
        "version": "20.2.1",
        "resolved": "https://registry.npmjs.org/@types/yargs-parser/-/yargs-parser-20.2.1.tgz",
        "integrity": "sha512-7tFImggNeNBVMsn0vLrpn1H1uPrUBdnARPTpZoitY37ZrdJREzf7I16tMrlK3hen349gr1NYh8CmZQa7CTG6Aw=="
      },
      "abab": {
        "version": "2.0.5",
        "resolved": "https://registry.npmjs.org/abab/-/abab-2.0.5.tgz",
        "integrity": "sha512-9IK9EadsbHo6jLWIpxpR6pL0sazTXV6+SQv25ZB+F7Bj9mJNaOc4nCRabwd5M/JwmUa8idz6Eci6eKfJryPs6Q=="
      },
      "acorn": {
        "version": "8.5.0",
        "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.5.0.tgz",
        "integrity": "sha512-yXbYeFy+jUuYd3/CDcg2NkIYE991XYX/bje7LmjJigUciaeO1JR4XxXgCIV1/Zc/dRuFEyw1L0pbA+qynJkW5Q=="
      },
      "acorn-globals": {
        "version": "6.0.0",
        "resolved": "https://registry.npmjs.org/acorn-globals/-/acorn-globals-6.0.0.tgz",
        "integrity": "sha512-ZQl7LOWaF5ePqqcX4hLuv/bLXYQNfNWw2c0/yX/TsPRKamzHcTGQnlCjHT3TsmkOUVEPS3crCxiPfdzE/Trlhg==",
        "requires": {
          "acorn": "^7.1.1",
          "acorn-walk": "^7.1.1"
        },
        "dependencies": {
          "acorn": {
            "version": "7.4.1",
            "resolved": "https://registry.npmjs.org/acorn/-/acorn-7.4.1.tgz",
            "integrity": "sha512-nQyp0o1/mNdbTO1PO6kHkwSrmgZ0MT/jCCpNiwbUjGoRN4dlBhqJtoQuCnEOKzgTVwg0ZWiCoQy6SxMebQVh8A=="
          }
        }
      },
      "acorn-walk": {
        "version": "7.2.0",
        "resolved": "https://registry.npmjs.org/acorn-walk/-/acorn-walk-7.2.0.tgz",
        "integrity": "sha512-OPdCF6GsMIP+Az+aWfAAOEt2/+iVDKE7oy6lJ098aoe59oAmK76qV6Gw60SbZ8jHuG2wH058GF4pLFbYamYrVA=="
      },
      "agent-base": {
        "version": "6.0.2",
        "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",
        "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",
        "requires": {
          "debug": "4"
        }
      },
      "ansi-escapes": {
        "version": "4.3.2",
        "resolved": "https://registry.npmjs.org/ansi-escapes/-/ansi-escapes-4.3.2.tgz",
        "integrity": "sha512-gKXj5ALrKWQLsYG9jlTRmR/xKluxHV+Z9QEwNIgCfM1/uwPMCuzVVnh5mwTd+OuBZcwSIMbqssNWRm1lE51QaQ==",
        "requires": {
          "type-fest": "^0.21.3"
        }
      },
      "ansi-regex": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
        "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ=="
      },
      "ansi-styles": {
        "version": "4.3.0",
        "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
        "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
        "requires": {
          "color-convert": "^2.0.1"
        }
      },
      "anymatch": {
        "version": "3.1.2",
        "resolved": "https://registry.npmjs.org/anymatch/-/anymatch-3.1.2.tgz",
        "integrity": "sha512-P43ePfOAIupkguHUycrc4qJ9kz8ZiuOUijaETwX7THt0Y/GNK7v0aa8rY816xWjZ7rJdA5XdMcpVFTKMq+RvWg==",
        "requires": {
          "normalize-path": "^3.0.0",
          "picomatch": "^2.0.4"
        }
      },
      "argparse": {
        "version": "1.0.10",
        "resolved": "https://registry.npmjs.org/argparse/-/argparse-1.0.10.tgz",
        "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
        "requires": {
          "sprintf-js": "~1.0.2"
        }
      },
      "asynckit": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
        "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k="
      },
      "babel-jest": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/babel-jest/-/babel-jest-27.2.5.tgz",
        "integrity": "sha512-GC9pWCcitBhSuF7H3zl0mftoKizlswaF0E3qi+rPL417wKkCB0d+Sjjb0OfXvxj7gWiBf497ldgRMii68Xz+2g==",
        "requires": {
          "@jest/transform": "^27.2.5",
          "@jest/types": "^27.2.5",
          "@types/babel__core": "^7.1.14",
          "babel-plugin-istanbul": "^6.0.0",
          "babel-preset-jest": "^27.2.0",
          "chalk": "^4.0.0",
          "graceful-fs": "^4.2.4",
          "slash": "^3.0.0"
        }
      },
      "babel-plugin-istanbul": {
        "version": "6.0.0",
        "resolved": "https://registry.npmjs.org/babel-plugin-istanbul/-/babel-plugin-istanbul-6.0.0.tgz",
        "integrity": "sha512-AF55rZXpe7trmEylbaE1Gv54wn6rwU03aptvRoVIGP8YykoSxqdVLV1TfwflBCE/QtHmqtP8SWlTENqbK8GCSQ==",
        "requires": {
          "@babel/helper-plugin-utils": "^7.0.0",
          "@istanbuljs/load-nyc-config": "^1.0.0",
          "@istanbuljs/schema": "^0.1.2",
          "istanbul-lib-instrument": "^4.0.0",
          "test-exclude": "^6.0.0"
        }
      },
      "babel-plugin-jest-hoist": {
        "version": "27.2.0",
        "resolved": "https://registry.npmjs.org/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-27.2.0.tgz",
        "integrity": "sha512-TOux9khNKdi64mW+0OIhcmbAn75tTlzKhxmiNXevQaPbrBYK7YKjP1jl6NHTJ6XR5UgUrJbCnWlKVnJn29dfjw==",
        "requires": {
          "@babel/template": "^7.3.3",
          "@babel/types": "^7.3.3",
          "@types/babel__core": "^7.0.0",
          "@types/babel__traverse": "^7.0.6"
        }
      },
      "babel-preset-current-node-syntax": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/babel-preset-current-node-syntax/-/babel-preset-current-node-syntax-1.0.1.tgz",
        "integrity": "sha512-M7LQ0bxarkxQoN+vz5aJPsLBn77n8QgTFmo8WK0/44auK2xlCXrYcUxHFxgU7qW5Yzw/CjmLRK2uJzaCd7LvqQ==",
        "requires": {
          "@babel/plugin-syntax-async-generators": "^7.8.4",
          "@babel/plugin-syntax-bigint": "^7.8.3",
          "@babel/plugin-syntax-class-properties": "^7.8.3",
          "@babel/plugin-syntax-import-meta": "^7.8.3",
          "@babel/plugin-syntax-json-strings": "^7.8.3",
          "@babel/plugin-syntax-logical-assignment-operators": "^7.8.3",
          "@babel/plugin-syntax-nullish-coalescing-operator": "^7.8.3",
          "@babel/plugin-syntax-numeric-separator": "^7.8.3",
          "@babel/plugin-syntax-object-rest-spread": "^7.8.3",
          "@babel/plugin-syntax-optional-catch-binding": "^7.8.3",
          "@babel/plugin-syntax-optional-chaining": "^7.8.3",
          "@babel/plugin-syntax-top-level-await": "^7.8.3"
        }
      },
      "babel-preset-jest": {
        "version": "27.2.0",
        "resolved": "https://registry.npmjs.org/babel-preset-jest/-/babel-preset-jest-27.2.0.tgz",
        "integrity": "sha512-z7MgQ3peBwN5L5aCqBKnF6iqdlvZvFUQynEhu0J+X9nHLU72jO3iY331lcYrg+AssJ8q7xsv5/3AICzVmJ/wvg==",
        "requires": {
          "babel-plugin-jest-hoist": "^27.2.0",
          "babel-preset-current-node-syntax": "^1.0.0"
        }
      },
      "balanced-match": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
        "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw=="
      },
      "base64-js": {
        "version": "1.5.1",
        "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
        "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA=="
      },
      "bl": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",
        "integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",
        "requires": {
          "buffer": "^5.5.0",
          "inherits": "^2.0.4",
          "readable-stream": "^3.4.0"
        }
      },
      "brace-expansion": {
        "version": "1.1.11",
        "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",
        "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
        "requires": {
          "balanced-match": "^1.0.0",
          "concat-map": "0.0.1"
        }
      },
      "braces": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.2.tgz",
        "integrity": "sha512-b8um+L1RzM3WDSzvhm6gIz1yfTbBt6YTlcEKAvsmqCZZFw46z626lVj9j1yEPW33H5H+lBQpZMP1k8l+78Ha0A==",
        "requires": {
          "fill-range": "^7.0.1"
        }
      },
      "browser-process-hrtime": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/browser-process-hrtime/-/browser-process-hrtime-1.0.0.tgz",
        "integrity": "sha512-9o5UecI3GhkpM6DrXr69PblIuWxPKk9Y0jHBRhdocZ2y7YECBFCsHm79Pr3OyR2AvjhDkabFJaDJMYRazHgsow=="
      },
      "browserslist": {
        "version": "4.17.4",
        "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.17.4.tgz",
        "integrity": "sha512-Zg7RpbZpIJRW3am9Lyckue7PLytvVxxhJj1CaJVlCWENsGEAOlnlt8X0ZxGRPp7Bt9o8tIRM5SEXy4BCPMJjLQ==",
        "requires": {
          "caniuse-lite": "^1.0.30001265",
          "electron-to-chromium": "^1.3.867",
          "escalade": "^3.1.1",
          "node-releases": "^2.0.0",
          "picocolors": "^1.0.0"
        }
      },
      "bser": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/bser/-/bser-2.1.1.tgz",
        "integrity": "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==",
        "requires": {
          "node-int64": "^0.4.0"
        }
      },
      "buffer": {
        "version": "5.7.1",
        "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
        "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
        "requires": {
          "base64-js": "^1.3.1",
          "ieee754": "^1.1.13"
        }
      },
      "buffer-from": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/buffer-from/-/buffer-from-1.1.2.tgz",
        "integrity": "sha512-E+XQCRwSbaaiChtv6k6Dwgc+bx+Bs6vuKJHHl5kox/BaKbhiXzqQOwK4cO22yElGp2OCmjwVhT3HmxgyPGnJfQ=="
      },
      "callsites": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
        "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ=="
      },
      "camelcase": {
        "version": "5.3.1",
        "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-5.3.1.tgz",
        "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg=="
      },
      "caniuse-lite": {
        "version": "1.0.30001265",
        "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001265.tgz",
        "integrity": "sha512-YzBnspggWV5hep1m9Z6sZVLOt7vrju8xWooFAgN6BA5qvy98qPAPb7vNUzypFaoh2pb3vlfzbDO8tB57UPGbtw=="
      },
      "chalk": {
        "version": "4.1.2",
        "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
        "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
        "requires": {
          "ansi-styles": "^4.1.0",
          "supports-color": "^7.1.0"
        }
      },
      "char-regex": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/char-regex/-/char-regex-1.0.2.tgz",
        "integrity": "sha512-kWWXztvZ5SBQV+eRgKFeh8q5sLuZY2+8WUIzlxWVTg+oGwY14qylx1KbKzHd8P6ZYkAg0xyIDU9JMHhyJMZ1jw=="
      },
      "chardet": {
        "version": "0.7.0",
        "resolved": "https://registry.npmjs.org/chardet/-/chardet-0.7.0.tgz",
        "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA=="
      },
      "ci-info": {
        "version": "3.2.0",
        "resolved": "https://registry.npmjs.org/ci-info/-/ci-info-3.2.0.tgz",
        "integrity": "sha512-dVqRX7fLUm8J6FgHJ418XuIgDLZDkYcDFTeL6TA2gt5WlIZUQrrH6EZrNClwT/H0FateUsZkGIOPRrLbP+PR9A=="
      },
      "cjs-module-lexer": {
        "version": "1.2.2",
        "resolved": "https://registry.npmjs.org/cjs-module-lexer/-/cjs-module-lexer-1.2.2.tgz",
        "integrity": "sha512-cOU9usZw8/dXIXKtwa8pM0OTJQuJkxMN6w30csNRUerHfeQ5R6U3kkU/FtJeIf3M202OHfY2U8ccInBG7/xogA=="
      },
      "cli-cursor": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/cli-cursor/-/cli-cursor-3.1.0.tgz",
        "integrity": "sha512-I/zHAwsKf9FqGoXM4WWRACob9+SNukZTd94DWF57E4toouRulbCxcUh6RKUEOQlYTHJnzkPMySvPNaaSLNfLZw==",
        "requires": {
          "restore-cursor": "^3.1.0"
        }
      },
      "cli-spinners": {
        "version": "2.6.1",
        "resolved": "https://registry.npmjs.org/cli-spinners/-/cli-spinners-2.6.1.tgz",
        "integrity": "sha512-x/5fWmGMnbKQAaNwN+UZlV79qBLM9JFnJuJ03gIi5whrob0xV0ofNVHy9DhwGdsMJQc2OKv0oGmLzvaqvAVv+g=="
      },
      "cli-width": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/cli-width/-/cli-width-3.0.0.tgz",
        "integrity": "sha512-FxqpkPPwu1HjuN93Omfm4h8uIanXofW0RxVEW3k5RKx+mJJYSthzNhp32Kzxxy3YAEZ/Dc/EWN1vZRY0+kOhbw=="
      },
      "cliui": {
        "version": "7.0.4",
        "resolved": "https://registry.npmjs.org/cliui/-/cliui-7.0.4.tgz",
        "integrity": "sha512-OcRE68cOsVMXp1Yvonl/fzkQOyjLSu/8bhPDfQt0e0/Eb283TKP20Fs2MqoPsr9SwA595rRCA+QMzYc9nBP+JQ==",
        "requires": {
          "string-width": "^4.2.0",
          "strip-ansi": "^6.0.0",
          "wrap-ansi": "^7.0.0"
        }
      },
      "clone": {
        "version": "1.0.4",
        "resolved": "https://registry.npmjs.org/clone/-/clone-1.0.4.tgz",
        "integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4="
      },
      "co": {
        "version": "4.6.0",
        "resolved": "https://registry.npmjs.org/co/-/co-4.6.0.tgz",
        "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ="
      },
      "collect-v8-coverage": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/collect-v8-coverage/-/collect-v8-coverage-1.0.1.tgz",
        "integrity": "sha512-iBPtljfCNcTKNAto0KEtDfZ3qzjJvqE3aTGZsbhjSBlorqpXJlaWWtPO35D+ZImoC3KWejX64o+yPGxhWSTzfg=="
      },
      "color-convert": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
        "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
        "requires": {
          "color-name": "~1.1.4"
        }
      },
      "color-name": {
        "version": "1.1.4",
        "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
        "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA=="
      },
      "combined-stream": {
        "version": "1.0.8",
        "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
        "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
        "requires": {
          "delayed-stream": "~1.0.0"
        }
      },
      "concat-map": {
        "version": "0.0.1",
        "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
        "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
      },
      "convert-source-map": {
        "version": "1.8.0",
        "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-1.8.0.tgz",
        "integrity": "sha512-+OQdjP49zViI/6i7nIJpA8rAl4sV/JdPfU9nZs3VqOwGIgizICvuN2ru6fMd+4llL0tar18UYJXfZ/TWtmhUjA==",
        "requires": {
          "safe-buffer": "~5.1.1"
        },
        "dependencies": {
          "safe-buffer": {
            "version": "5.1.2",
            "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
            "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
          }
        }
      },
      "cross-spawn": {
        "version": "7.0.3",
        "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",
        "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",
        "requires": {
          "path-key": "^3.1.0",
          "shebang-command": "^2.0.0",
          "which": "^2.0.1"
        }
      },
      "cssom": {
        "version": "0.4.4",
        "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.4.4.tgz",
        "integrity": "sha512-p3pvU7r1MyyqbTk+WbNJIgJjG2VmTIaB10rI93LzVPrmDJKkzKYMtxxyAvQXR/NS6otuzveI7+7BBq3SjBS2mw=="
      },
      "cssstyle": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-2.3.0.tgz",
        "integrity": "sha512-AZL67abkUzIuvcHqk7c09cezpGNcxUxU4Ioi/05xHk4DQeTkWmGYftIE6ctU6AEt+Gn4n1lDStOtj7FKycP71A==",
        "requires": {
          "cssom": "~0.3.6"
        },
        "dependencies": {
          "cssom": {
            "version": "0.3.8",
            "resolved": "https://registry.npmjs.org/cssom/-/cssom-0.3.8.tgz",
            "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg=="
          }
        }
      },
      "data-urls": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-2.0.0.tgz",
        "integrity": "sha512-X5eWTSXO/BJmpdIKCRuKUgSCgAN0OwliVK3yPKbwIWU1Tdw5BRajxlzMidvh+gwko9AfQ9zIj52pzF91Q3YAvQ==",
        "requires": {
          "abab": "^2.0.3",
          "whatwg-mimetype": "^2.3.0",
          "whatwg-url": "^8.0.0"
        }
      },
      "debug": {
        "version": "4.3.2",
        "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.2.tgz",
        "integrity": "sha512-mOp8wKcvj7XxC78zLgw/ZA+6TSgkoE2C/ienthhRD298T7UNwAg9diBpLRxC0mOezLl4B0xV7M0cCO6P/O0Xhw==",
        "requires": {
          "ms": "2.1.2"
        }
      },
      "decimal.js": {
        "version": "10.3.1",
        "resolved": "https://registry.npmjs.org/decimal.js/-/decimal.js-10.3.1.tgz",
        "integrity": "sha512-V0pfhfr8suzyPGOx3nmq4aHqabehUZn6Ch9kyFpV79TGDTWFmHqUqXdabR7QHqxzrYolF4+tVmJhUG4OURg5dQ=="
      },
      "dedent": {
        "version": "0.7.0",
        "resolved": "https://registry.npmjs.org/dedent/-/dedent-0.7.0.tgz",
        "integrity": "sha1-JJXduvbrh0q7Dhvp3yLS5aVEMmw="
      },
      "deep-is": {
        "version": "0.1.4",
        "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
        "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ=="
      },
      "deepmerge": {
        "version": "4.2.2",
        "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.2.2.tgz",
        "integrity": "sha512-FJ3UgI4gIl+PHZm53knsuSFpE+nESMr7M4v9QcgB7S63Kj/6WqMiFQJpBBYz1Pt+66bZpP3Q7Lye0Oo9MPKEdg=="
      },
      "defaults": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/defaults/-/defaults-1.0.3.tgz",
        "integrity": "sha1-xlYFHpgX2f8I7YgUd/P+QBnz730=",
        "requires": {
          "clone": "^1.0.2"
        }
      },
      "delayed-stream": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
        "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk="
      },
      "detect-newline": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/detect-newline/-/detect-newline-3.1.0.tgz",
        "integrity": "sha512-TLz+x/vEXm/Y7P7wn1EJFNLxYpUD4TgMosxY6fAVJUnJMbupHBOncxyWUG9OpTaH9EBD7uFI5LfEgmMOc54DsA=="
      },
      "diff-sequences": {
        "version": "27.0.6",
        "resolved": "https://registry.npmjs.org/diff-sequences/-/diff-sequences-27.0.6.tgz",
        "integrity": "sha512-ag6wfpBFyNXZ0p8pcuIDS//D8H062ZQJ3fzYxjpmeKjnz8W4pekL3AI8VohmyZmsWW2PWaHgjsmqR6L13101VQ=="
      },
      "domexception": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/domexception/-/domexception-2.0.1.tgz",
        "integrity": "sha512-yxJ2mFy/sibVQlu5qHjOkf9J3K6zgmCxgJ94u2EdvDOV09H+32LtRswEcUsmUWN72pVLOEnTSRaIVVzVQgS0dg==",
        "requires": {
          "webidl-conversions": "^5.0.0"
        },
        "dependencies": {
          "webidl-conversions": {
            "version": "5.0.0",
            "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-5.0.0.tgz",
            "integrity": "sha512-VlZwKPCkYKxQgeSbH5EyngOmRp7Ww7I9rQLERETtf5ofd9pGeswWiOtogpEO850jziPRarreGxn5QIiTqpb2wA=="
          }
        }
      },
      "electron-to-chromium": {
        "version": "1.3.867",
        "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.3.867.tgz",
        "integrity": "sha512-WbTXOv7hsLhjJyl7jBfDkioaY++iVVZomZ4dU6TMe/SzucV6mUAs2VZn/AehBwuZMiNEQDaPuTGn22YK5o+aDw=="
      },
      "emittery": {
        "version": "0.8.1",
        "resolved": "https://registry.npmjs.org/emittery/-/emittery-0.8.1.tgz",
        "integrity": "sha512-uDfvUjVrfGJJhymx/kz6prltenw1u7WrCg1oa94zYY8xxVpLLUu045LAT0dhDZdXG58/EpPL/5kA180fQ/qudg=="
      },
      "emoji-regex": {
        "version": "8.0.0",
        "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
        "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A=="
      },
      "escalade": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.1.1.tgz",
        "integrity": "sha512-k0er2gUkLf8O0zKJiAhmkTnJlTvINGv7ygDNPbeIsX/TJjGJZHuh9B2UxbsaEkmlEo9MfhrSzmhIlhRlI2GXnw=="
      },
      "escape-string-regexp": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
        "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ="
      },
      "escodegen": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/escodegen/-/escodegen-2.0.0.tgz",
        "integrity": "sha512-mmHKys/C8BFUGI+MAWNcSYoORYLMdPzjrknd2Vc+bUsjN5bXcr8EhrNB+UTqfL1y3I9c4fw2ihgtMPQLBRiQxw==",
        "requires": {
          "esprima": "^4.0.1",
          "estraverse": "^5.2.0",
          "esutils": "^2.0.2",
          "optionator": "^0.8.1",
          "source-map": "~0.6.1"
        }
      },
      "esprima": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/esprima/-/esprima-4.0.1.tgz",
        "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A=="
      },
      "estraverse": {
        "version": "5.2.0",
        "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.2.0.tgz",
        "integrity": "sha512-BxbNGGNm0RyRYvUdHpIwv9IWzeM9XClbOxwoATuFdOE7ZE6wHL+HQ5T8hoPM+zHvmKzzsEqhgy0GrQ5X13afiQ=="
      },
      "esutils": {
        "version": "2.0.3",
        "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
        "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g=="
      },
      "execa": {
        "version": "5.1.1",
        "resolved": "https://registry.npmjs.org/execa/-/execa-5.1.1.tgz",
        "integrity": "sha512-8uSpZZocAZRBAPIEINJj3Lo9HyGitllczc27Eh5YYojjMFMn8yHMDMaUHE2Jqfq05D/wucwI4JGURyXt1vchyg==",
        "requires": {
          "cross-spawn": "^7.0.3",
          "get-stream": "^6.0.0",
          "human-signals": "^2.1.0",
          "is-stream": "^2.0.0",
          "merge-stream": "^2.0.0",
          "npm-run-path": "^4.0.1",
          "onetime": "^5.1.2",
          "signal-exit": "^3.0.3",
          "strip-final-newline": "^2.0.0"
        }
      },
      "exit": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/exit/-/exit-0.1.2.tgz",
        "integrity": "sha1-BjJjj42HfMghB9MKD/8aF8uhzQw="
      },
      "expect": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/expect/-/expect-27.2.5.tgz",
        "integrity": "sha512-ZrO0w7bo8BgGoP/bLz+HDCI+0Hfei9jUSZs5yI/Wyn9VkG9w8oJ7rHRgYj+MA7yqqFa0IwHA3flJzZtYugShJA==",
        "requires": {
          "@jest/types": "^27.2.5",
          "ansi-styles": "^5.0.0",
          "jest-get-type": "^27.0.6",
          "jest-matcher-utils": "^27.2.5",
          "jest-message-util": "^27.2.5",
          "jest-regex-util": "^27.0.6"
        },
        "dependencies": {
          "ansi-styles": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz",
            "integrity": "sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA=="
          }
        }
      },
      "external-editor": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/external-editor/-/external-editor-3.1.0.tgz",
        "integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
        "requires": {
          "chardet": "^0.7.0",
          "iconv-lite": "^0.4.24",
          "tmp": "^0.0.33"
        }
      },
      "fast-json-stable-stringify": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
        "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw=="
      },
      "fast-levenshtein": {
        "version": "2.0.6",
        "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
        "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc="
      },
      "fb-watchman": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/fb-watchman/-/fb-watchman-2.0.1.tgz",
        "integrity": "sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg==",
        "requires": {
          "bser": "2.1.1"
        }
      },
      "figures": {
        "version": "3.2.0",
        "resolved": "https://registry.npmjs.org/figures/-/figures-3.2.0.tgz",
        "integrity": "sha512-yaduQFRKLXYOGgEn6AZau90j3ggSOyiqXU0F9JZfeXYhNa+Jk4X+s45A2zg5jns87GAFa34BBm2kXw4XpNcbdg==",
        "requires": {
          "escape-string-regexp": "^1.0.5"
        }
      },
      "fill-range": {
        "version": "7.0.1",
        "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.0.1.tgz",
        "integrity": "sha512-qOo9F+dMUmC2Lcb4BbVvnKJxTPjCm+RRpe4gDuGrzkL7mEVl/djYSu2OdQ2Pa302N4oqkSg9ir6jaLWJ2USVpQ==",
        "requires": {
          "to-regex-range": "^5.0.1"
        }
      },
      "find-up": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/find-up/-/find-up-4.1.0.tgz",
        "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
        "requires": {
          "locate-path": "^5.0.0",
          "path-exists": "^4.0.0"
        }
      },
      "form-data": {
        "version": "3.0.1",
        "resolved": "https://registry.npmjs.org/form-data/-/form-data-3.0.1.tgz",
        "integrity": "sha512-RHkBKtLWUVwd7SqRIvCZMEvAMoGUp0XU+seQiZejj0COz3RI3hWP4sCv3gZWWLjJTd7rGwcsF5eKZGii0r/hbg==",
        "requires": {
          "asynckit": "^0.4.0",
          "combined-stream": "^1.0.8",
          "mime-types": "^2.1.12"
        }
      },
      "fs.realpath": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
        "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8="
      },
      "fsevents": {
        "version": "2.3.2",
        "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
        "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
        "optional": true
      },
      "function-bind": {
        "version": "1.1.1",
        "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
        "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
      },
      "gensync": {
        "version": "1.0.0-beta.2",
        "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
        "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg=="
      },
      "get-caller-file": {
        "version": "2.0.5",
        "resolved": "https://registry.npmjs.org/get-caller-file/-/get-caller-file-2.0.5.tgz",
        "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg=="
      },
      "get-package-type": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/get-package-type/-/get-package-type-0.1.0.tgz",
        "integrity": "sha512-pjzuKtY64GYfWizNAJ0fr9VqttZkNiK2iS430LtIHzjBEr6bX8Am2zm4sW4Ro5wjWW5cAlRL1qAMTcXbjNAO2Q=="
      },
      "get-stream": {
        "version": "6.0.1",
        "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-6.0.1.tgz",
        "integrity": "sha512-ts6Wi+2j3jQjqi70w5AlN8DFnkSwC+MqmxEzdEALB2qXZYV3X/b1CTfgPLGJNMeAWxdPfU8FO1ms3NUfaHCPYg=="
      },
      "glob": {
        "version": "7.2.0",
        "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.0.tgz",
        "integrity": "sha512-lmLf6gtyrPq8tTjSmrO94wBeQbFR3HbLHbuyD69wuyQkImp2hWqMGB47OX65FBkPffO641IP9jWa1z4ivqG26Q==",
        "requires": {
          "fs.realpath": "^1.0.0",
          "inflight": "^1.0.4",
          "inherits": "2",
          "minimatch": "^3.0.4",
          "once": "^1.3.0",
          "path-is-absolute": "^1.0.0"
        }
      },
      "globals": {
        "version": "11.12.0",
        "resolved": "https://registry.npmjs.org/globals/-/globals-11.12.0.tgz",
        "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA=="
      },
      "graceful-fs": {
        "version": "4.2.8",
        "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.8.tgz",
        "integrity": "sha512-qkIilPUYcNhJpd33n0GBXTB1MMPp14TxEsEs0pTrsSVucApsYzW5V+Q8Qxhik6KU3evy+qkAAowTByymK0avdg=="
      },
      "has": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
        "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
        "requires": {
          "function-bind": "^1.1.1"
        }
      },
      "has-flag": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
        "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ=="
      },
      "html-encoding-sniffer": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-2.0.1.tgz",
        "integrity": "sha512-D5JbOMBIR/TVZkubHT+OyT2705QvogUW4IBn6nHd756OwieSF9aDYFj4dv6HHEVGYbHaLETa3WggZYWWMyy3ZQ==",
        "requires": {
          "whatwg-encoding": "^1.0.5"
        }
      },
      "html-escaper": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/html-escaper/-/html-escaper-2.0.2.tgz",
        "integrity": "sha512-H2iMtd0I4Mt5eYiapRdIDjp+XzelXQ0tFE4JS7YFwFevXXMmOp9myNrUvCg0D6ws8iqkRPBfKHgbwig1SmlLfg=="
      },
      "http-proxy-agent": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-4.0.1.tgz",
        "integrity": "sha512-k0zdNgqWTGA6aeIRVpvfVob4fL52dTfaehylg0Y4UvSySvOq/Y+BOyPrgpUrA7HylqvU8vIZGsRuXmspskV0Tg==",
        "requires": {
          "@tootallnate/once": "1",
          "agent-base": "6",
          "debug": "4"
        }
      },
      "https-proxy-agent": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-5.0.0.tgz",
        "integrity": "sha512-EkYm5BcKUGiduxzSt3Eppko+PiNWNEpa4ySk9vTC6wDsQJW9rHSa+UhGNJoRYp7bz6Ht1eaRIa6QaJqO5rCFbA==",
        "requires": {
          "agent-base": "6",
          "debug": "4"
        }
      },
      "human-signals": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/human-signals/-/human-signals-2.1.0.tgz",
        "integrity": "sha512-B4FFZ6q/T2jhhksgkbEW3HBvWIfDW85snkQgawt07S7J5QXTk6BkNV+0yAeZrM5QpMAdYlocGoljn0sJ/WQkFw=="
      },
      "iconv-lite": {
        "version": "0.4.24",
        "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
        "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
        "requires": {
          "safer-buffer": ">= 2.1.2 < 3"
        }
      },
      "ieee754": {
        "version": "1.2.1",
        "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
        "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA=="
      },
      "import-local": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/import-local/-/import-local-3.0.3.tgz",
        "integrity": "sha512-bE9iaUY3CXH8Cwfan/abDKAxe1KGT9kyGsBPqf6DMK/z0a2OzAsrukeYNgIH6cH5Xr452jb1TUL8rSfCLjZ9uA==",
        "requires": {
          "pkg-dir": "^4.2.0",
          "resolve-cwd": "^3.0.0"
        }
      },
      "imurmurhash": {
        "version": "0.1.4",
        "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
        "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o="
      },
      "inflight": {
        "version": "1.0.6",
        "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
        "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
        "requires": {
          "once": "^1.3.0",
          "wrappy": "1"
        }
      },
      "inherits": {
        "version": "2.0.4",
        "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
        "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
      },
      "inquirer": {
        "version": "8.2.0",
        "resolved": "https://registry.npmjs.org/inquirer/-/inquirer-8.2.0.tgz",
        "integrity": "sha512-0crLweprevJ02tTuA6ThpoAERAGyVILC4sS74uib58Xf/zSr1/ZWtmm7D5CI+bSQEaA04f0K7idaHpQbSWgiVQ==",
        "requires": {
          "ansi-escapes": "^4.2.1",
          "chalk": "^4.1.1",
          "cli-cursor": "^3.1.0",
          "cli-width": "^3.0.0",
          "external-editor": "^3.0.3",
          "figures": "^3.0.0",
          "lodash": "^4.17.21",
          "mute-stream": "0.0.8",
          "ora": "^5.4.1",
          "run-async": "^2.4.0",
          "rxjs": "^7.2.0",
          "string-width": "^4.1.0",
          "strip-ansi": "^6.0.0",
          "through": "^2.3.6"
        }
      },
      "is-ci": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/is-ci/-/is-ci-3.0.0.tgz",
        "integrity": "sha512-kDXyttuLeslKAHYL/K28F2YkM3x5jvFPEw3yXbRptXydjD9rpLEz+C5K5iutY9ZiUu6AP41JdvRQwF4Iqs4ZCQ==",
        "requires": {
          "ci-info": "^3.1.1"
        }
      },
      "is-core-module": {
        "version": "2.7.0",
        "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.7.0.tgz",
        "integrity": "sha512-ByY+tjCciCr+9nLryBYcSD50EOGWt95c7tIsKTG1J2ixKKXPvF7Ej3AVd+UfDydAJom3biBGDBALaO79ktwgEQ==",
        "requires": {
          "has": "^1.0.3"
        }
      },
      "is-fullwidth-code-point": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
        "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg=="
      },
      "is-generator-fn": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/is-generator-fn/-/is-generator-fn-2.1.0.tgz",
        "integrity": "sha512-cTIB4yPYL/Grw0EaSzASzg6bBy9gqCofvWN8okThAYIxKJZC+udlRAmGbM0XLeniEJSs8uEgHPGuHSe1XsOLSQ=="
      },
      "is-interactive": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/is-interactive/-/is-interactive-1.0.0.tgz",
        "integrity": "sha512-2HvIEKRoqS62guEC+qBjpvRubdX910WCMuJTZ+I9yvqKU2/12eSL549HMwtabb4oupdj2sMP50k+XJfB/8JE6w=="
      },
      "is-number": {
        "version": "7.0.0",
        "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
        "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng=="
      },
      "is-potential-custom-element-name": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/is-potential-custom-element-name/-/is-potential-custom-element-name-1.0.1.tgz",
        "integrity": "sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ=="
      },
      "is-stream": {
        "version": "2.0.1",
        "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-2.0.1.tgz",
        "integrity": "sha512-hFoiJiTl63nn+kstHGBtewWSKnQLpyb155KHheA1l39uvtO9nWIop1p3udqPcUd/xbF1VLMO4n7OI6p7RbngDg=="
      },
      "is-typedarray": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
        "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo="
      },
      "is-unicode-supported": {
        "version": "0.1.0",
        "resolved": "https://registry.npmjs.org/is-unicode-supported/-/is-unicode-supported-0.1.0.tgz",
        "integrity": "sha512-knxG2q4UC3u8stRGyAVJCOdxFmv5DZiRcdlIaAQXAbSfJya+OhopNotLQrstBhququ4ZpuKbDc/8S6mgXgPFPw=="
      },
      "isexe": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
        "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA="
      },
      "istanbul-lib-coverage": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/istanbul-lib-coverage/-/istanbul-lib-coverage-3.0.2.tgz",
        "integrity": "sha512-o5+eTUYzCJ11/+JhW5/FUCdfsdoYVdQ/8I/OveE2XsjehYn5DdeSnNQAbjYaO8gQ6hvGTN6GM6ddQqpTVG5j8g=="
      },
      "istanbul-lib-instrument": {
        "version": "4.0.3",
        "resolved": "https://registry.npmjs.org/istanbul-lib-instrument/-/istanbul-lib-instrument-4.0.3.tgz",
        "integrity": "sha512-BXgQl9kf4WTCPCCpmFGoJkz/+uhvm7h7PFKUYxh7qarQd3ER33vHG//qaE8eN25l07YqZPpHXU9I09l/RD5aGQ==",
        "requires": {
          "@babel/core": "^7.7.5",
          "@istanbuljs/schema": "^0.1.2",
          "istanbul-lib-coverage": "^3.0.0",
          "semver": "^6.3.0"
        }
      },
      "istanbul-lib-report": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/istanbul-lib-report/-/istanbul-lib-report-3.0.0.tgz",
        "integrity": "sha512-wcdi+uAKzfiGT2abPpKZ0hSU1rGQjUQnLvtY5MpQ7QCTahD3VODhcu4wcfY1YtkGaDD5yuydOLINXsfbus9ROw==",
        "requires": {
          "istanbul-lib-coverage": "^3.0.0",
          "make-dir": "^3.0.0",
          "supports-color": "^7.1.0"
        }
      },
      "istanbul-lib-source-maps": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/istanbul-lib-source-maps/-/istanbul-lib-source-maps-4.0.1.tgz",
        "integrity": "sha512-n3s8EwkdFIJCG3BPKBYvskgXGoy88ARzvegkitk60NxRdwltLOTaH7CUiMRXvwYorl0Q712iEjcWB+fK/MrWVw==",
        "requires": {
          "debug": "^4.1.1",
          "istanbul-lib-coverage": "^3.0.0",
          "source-map": "^0.6.1"
        }
      },
      "istanbul-reports": {
        "version": "3.0.5",
        "resolved": "https://registry.npmjs.org/istanbul-reports/-/istanbul-reports-3.0.5.tgz",
        "integrity": "sha512-5+19PlhnGabNWB7kOFnuxT8H3T/iIyQzIbQMxXsURmmvKg86P2sbkrGOT77VnHw0Qr0gc2XzRaRfMZYYbSQCJQ==",
        "requires": {
          "html-escaper": "^2.0.0",
          "istanbul-lib-report": "^3.0.0"
        }
      },
      "jest": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest/-/jest-27.2.5.tgz",
        "integrity": "sha512-vDMzXcpQN4Ycaqu+vO7LX8pZwNNoKMhc+gSp6q1D8S6ftRk8gNW8cni3YFxknP95jxzQo23Lul0BI2FrWgnwYQ==",
        "requires": {
          "@jest/core": "^27.2.5",
          "import-local": "^3.0.2",
          "jest-cli": "^27.2.5"
        },
        "dependencies": {
          "jest-cli": {
            "version": "27.2.5",
            "resolved": "https://registry.npmjs.org/jest-cli/-/jest-cli-27.2.5.tgz",
            "integrity": "sha512-XzfcOXi5WQrXqFYsDxq5RDOKY4FNIgBgvgf3ZBz4e/j5/aWep5KnsAYH5OFPMdX/TP/LFsYQMRH7kzJUMh6JKg==",
            "requires": {
              "@jest/core": "^27.2.5",
              "@jest/test-result": "^27.2.5",
              "@jest/types": "^27.2.5",
              "chalk": "^4.0.0",
              "exit": "^0.1.2",
              "graceful-fs": "^4.2.4",
              "import-local": "^3.0.2",
              "jest-config": "^27.2.5",
              "jest-util": "^27.2.5",
              "jest-validate": "^27.2.5",
              "prompts": "^2.0.1",
              "yargs": "^16.2.0"
            }
          }
        }
      },
      "jest-changed-files": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-changed-files/-/jest-changed-files-27.2.5.tgz",
        "integrity": "sha512-jfnNJzF89csUKRPKJ4MwZ1SH27wTmX2xiAIHUHrsb/OYd9Jbo4/SXxJ17/nnx6RIifpthk3Y+LEeOk+/dDeGdw==",
        "requires": {
          "@jest/types": "^27.2.5",
          "execa": "^5.0.0",
          "throat": "^6.0.1"
        }
      },
      "jest-circus": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-circus/-/jest-circus-27.2.5.tgz",
        "integrity": "sha512-eyL9IcrAxm3Saq3rmajFCwpaxaRMGJ1KJs+7hlTDinXpJmeR3P02bheM3CYohE7UfwOBmrFMJHjgo/WPcLTM+Q==",
        "requires": {
          "@jest/environment": "^27.2.5",
          "@jest/test-result": "^27.2.5",
          "@jest/types": "^27.2.5",
          "@types/node": "*",
          "chalk": "^4.0.0",
          "co": "^4.6.0",
          "dedent": "^0.7.0",
          "expect": "^27.2.5",
          "is-generator-fn": "^2.0.0",
          "jest-each": "^27.2.5",
          "jest-matcher-utils": "^27.2.5",
          "jest-message-util": "^27.2.5",
          "jest-runtime": "^27.2.5",
          "jest-snapshot": "^27.2.5",
          "jest-util": "^27.2.5",
          "pretty-format": "^27.2.5",
          "slash": "^3.0.0",
          "stack-utils": "^2.0.3",
          "throat": "^6.0.1"
        }
      },
      "jest-config": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-config/-/jest-config-27.2.5.tgz",
        "integrity": "sha512-QdENtn9b5rIIYGlbDNEcgY9LDL5kcokJnXrp7x8AGjHob/XFqw1Z6p+gjfna2sUulQsQ3ce2Fvntnv+7fKYDhQ==",
        "requires": {
          "@babel/core": "^7.1.0",
          "@jest/test-sequencer": "^27.2.5",
          "@jest/types": "^27.2.5",
          "babel-jest": "^27.2.5",
          "chalk": "^4.0.0",
          "deepmerge": "^4.2.2",
          "glob": "^7.1.1",
          "graceful-fs": "^4.2.4",
          "is-ci": "^3.0.0",
          "jest-circus": "^27.2.5",
          "jest-environment-jsdom": "^27.2.5",
          "jest-environment-node": "^27.2.5",
          "jest-get-type": "^27.0.6",
          "jest-jasmine2": "^27.2.5",
          "jest-regex-util": "^27.0.6",
          "jest-resolve": "^27.2.5",
          "jest-runner": "^27.2.5",
          "jest-util": "^27.2.5",
          "jest-validate": "^27.2.5",
          "micromatch": "^4.0.4",
          "pretty-format": "^27.2.5"
        }
      },
      "jest-diff": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-diff/-/jest-diff-27.2.5.tgz",
        "integrity": "sha512-7gfwwyYkeslOOVQY4tVq5TaQa92mWfC9COsVYMNVYyJTOYAqbIkoD3twi5A+h+tAPtAelRxkqY6/xu+jwTr0dA==",
        "requires": {
          "chalk": "^4.0.0",
          "diff-sequences": "^27.0.6",
          "jest-get-type": "^27.0.6",
          "pretty-format": "^27.2.5"
        }
      },
      "jest-docblock": {
        "version": "27.0.6",
        "resolved": "https://registry.npmjs.org/jest-docblock/-/jest-docblock-27.0.6.tgz",
        "integrity": "sha512-Fid6dPcjwepTFraz0YxIMCi7dejjJ/KL9FBjPYhBp4Sv1Y9PdhImlKZqYU555BlN4TQKaTc+F2Av1z+anVyGkA==",
        "requires": {
          "detect-newline": "^3.0.0"
        }
      },
      "jest-each": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-each/-/jest-each-27.2.5.tgz",
        "integrity": "sha512-HUPWIbJT0bXarRwKu/m7lYzqxR4GM5EhKOsu0z3t0SKtbFN6skQhpAUADM4qFShBXb9zoOuag5lcrR1x/WM+Ag==",
        "requires": {
          "@jest/types": "^27.2.5",
          "chalk": "^4.0.0",
          "jest-get-type": "^27.0.6",
          "jest-util": "^27.2.5",
          "pretty-format": "^27.2.5"
        }
      },
      "jest-environment-jsdom": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-environment-jsdom/-/jest-environment-jsdom-27.2.5.tgz",
        "integrity": "sha512-QtRpOh/RQKuXniaWcoFE2ElwP6tQcyxHu0hlk32880g0KczdonCs5P1sk5+weu/OVzh5V4Bt1rXuQthI01mBLg==",
        "requires": {
          "@jest/environment": "^27.2.5",
          "@jest/fake-timers": "^27.2.5",
          "@jest/types": "^27.2.5",
          "@types/node": "*",
          "jest-mock": "^27.2.5",
          "jest-util": "^27.2.5",
          "jsdom": "^16.6.0"
        }
      },
      "jest-environment-node": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-environment-node/-/jest-environment-node-27.2.5.tgz",
        "integrity": "sha512-0o1LT4grm7iwrS8fIoLtwJxb/hoa3GsH7pP10P02Jpj7Mi4BXy65u46m89vEM2WfD1uFJQ2+dfDiWZNA2e6bJg==",
        "requires": {
          "@jest/environment": "^27.2.5",
          "@jest/fake-timers": "^27.2.5",
          "@jest/types": "^27.2.5",
          "@types/node": "*",
          "jest-mock": "^27.2.5",
          "jest-util": "^27.2.5"
        }
      },
      "jest-get-type": {
        "version": "27.0.6",
        "resolved": "https://registry.npmjs.org/jest-get-type/-/jest-get-type-27.0.6.tgz",
        "integrity": "sha512-XTkK5exIeUbbveehcSR8w0bhH+c0yloW/Wpl+9vZrjzztCPWrxhHwkIFpZzCt71oRBsgxmuUfxEqOYoZI2macg=="
      },
      "jest-haste-map": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-haste-map/-/jest-haste-map-27.2.5.tgz",
        "integrity": "sha512-pzO+Gw2WLponaSi0ilpzYBE0kuVJstoXBX8YWyUebR8VaXuX4tzzn0Zp23c/WaETo7XYTGv2e8KdnpiskAFMhQ==",
        "requires": {
          "@jest/types": "^27.2.5",
          "@types/graceful-fs": "^4.1.2",
          "@types/node": "*",
          "anymatch": "^3.0.3",
          "fb-watchman": "^2.0.0",
          "fsevents": "^2.3.2",
          "graceful-fs": "^4.2.4",
          "jest-regex-util": "^27.0.6",
          "jest-serializer": "^27.0.6",
          "jest-util": "^27.2.5",
          "jest-worker": "^27.2.5",
          "micromatch": "^4.0.4",
          "walker": "^1.0.7"
        }
      },
      "jest-jasmine2": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-jasmine2/-/jest-jasmine2-27.2.5.tgz",
        "integrity": "sha512-hdxY9Cm/CjLqu2tXeAoQHPgA4vcqlweVXYOg1+S9FeFdznB9Rti+eEBKDDkmOy9iqr4Xfbq95OkC4NFbXXPCAQ==",
        "requires": {
          "@babel/traverse": "^7.1.0",
          "@jest/environment": "^27.2.5",
          "@jest/source-map": "^27.0.6",
          "@jest/test-result": "^27.2.5",
          "@jest/types": "^27.2.5",
          "@types/node": "*",
          "chalk": "^4.0.0",
          "co": "^4.6.0",
          "expect": "^27.2.5",
          "is-generator-fn": "^2.0.0",
          "jest-each": "^27.2.5",
          "jest-matcher-utils": "^27.2.5",
          "jest-message-util": "^27.2.5",
          "jest-runtime": "^27.2.5",
          "jest-snapshot": "^27.2.5",
          "jest-util": "^27.2.5",
          "pretty-format": "^27.2.5",
          "throat": "^6.0.1"
        }
      },
      "jest-leak-detector": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-leak-detector/-/jest-leak-detector-27.2.5.tgz",
        "integrity": "sha512-HYsi3GUR72bYhOGB5C5saF9sPdxGzSjX7soSQS+BqDRysc7sPeBwPbhbuT8DnOpijnKjgwWQ8JqvbmReYnt3aQ==",
        "requires": {
          "jest-get-type": "^27.0.6",
          "pretty-format": "^27.2.5"
        }
      },
      "jest-matcher-utils": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-matcher-utils/-/jest-matcher-utils-27.2.5.tgz",
        "integrity": "sha512-qNR/kh6bz0Dyv3m68Ck2g1fLW5KlSOUNcFQh87VXHZwWc/gY6XwnKofx76Qytz3x5LDWT09/2+yXndTkaG4aWg==",
        "requires": {
          "chalk": "^4.0.0",
          "jest-diff": "^27.2.5",
          "jest-get-type": "^27.0.6",
          "pretty-format": "^27.2.5"
        }
      },
      "jest-message-util": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-message-util/-/jest-message-util-27.2.5.tgz",
        "integrity": "sha512-ggXSLoPfIYcbmZ8glgEJZ8b+e0Msw/iddRmgkoO7lDAr9SmI65IIfv7VnvTnV4FGnIIUIjzM+fHRHO5RBvyAbQ==",
        "requires": {
          "@babel/code-frame": "^7.12.13",
          "@jest/types": "^27.2.5",
          "@types/stack-utils": "^2.0.0",
          "chalk": "^4.0.0",
          "graceful-fs": "^4.2.4",
          "micromatch": "^4.0.4",
          "pretty-format": "^27.2.5",
          "slash": "^3.0.0",
          "stack-utils": "^2.0.3"
        }
      },
      "jest-mock": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-mock/-/jest-mock-27.2.5.tgz",
        "integrity": "sha512-HiMB3LqE9RzmeMzZARi2Bz3NoymxyP0gCid4y42ca1djffNtYFKgI220aC1VP1mUZ8rbpqZbHZOJ15093bZV/Q==",
        "requires": {
          "@jest/types": "^27.2.5",
          "@types/node": "*"
        }
      },
      "jest-pnp-resolver": {
        "version": "1.2.2",
        "resolved": "https://registry.npmjs.org/jest-pnp-resolver/-/jest-pnp-resolver-1.2.2.tgz",
        "integrity": "sha512-olV41bKSMm8BdnuMsewT4jqlZ8+3TCARAXjZGT9jcoSnrfUnRCqnMoF9XEeoWjbzObpqF9dRhHQj0Xb9QdF6/w=="
      },
      "jest-regex-util": {
        "version": "27.0.6",
        "resolved": "https://registry.npmjs.org/jest-regex-util/-/jest-regex-util-27.0.6.tgz",
        "integrity": "sha512-SUhPzBsGa1IKm8hx2F4NfTGGp+r7BXJ4CulsZ1k2kI+mGLG+lxGrs76veN2LF/aUdGosJBzKgXmNCw+BzFqBDQ=="
      },
      "jest-resolve": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-resolve/-/jest-resolve-27.2.5.tgz",
        "integrity": "sha512-q5irwS3oS73SKy3+FM/HL2T7WJftrk9BRzrXF92f7net5HMlS7lJMg/ZwxLB4YohKqjSsdksEw7n/jvMxV7EKg==",
        "requires": {
          "@jest/types": "^27.2.5",
          "chalk": "^4.0.0",
          "escalade": "^3.1.1",
          "graceful-fs": "^4.2.4",
          "jest-haste-map": "^27.2.5",
          "jest-pnp-resolver": "^1.2.2",
          "jest-util": "^27.2.5",
          "jest-validate": "^27.2.5",
          "resolve": "^1.20.0",
          "slash": "^3.0.0"
        }
      },
      "jest-resolve-dependencies": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-resolve-dependencies/-/jest-resolve-dependencies-27.2.5.tgz",
        "integrity": "sha512-BSjefped31bcvvCh++/pN9ueqqN1n0+p8/58yScuWfklLm2tbPbS9d251vJhAy0ZI2pL/0IaGhOTJrs9Y4FJlg==",
        "requires": {
          "@jest/types": "^27.2.5",
          "jest-regex-util": "^27.0.6",
          "jest-snapshot": "^27.2.5"
        }
      },
      "jest-runner": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-runner/-/jest-runner-27.2.5.tgz",
        "integrity": "sha512-n41vw9RLg5TKAnEeJK9d6pGOsBOpwE89XBniK+AD1k26oIIy3V7ogM1scbDjSheji8MUPC9pNgCrZ/FHLVDNgg==",
        "requires": {
          "@jest/console": "^27.2.5",
          "@jest/environment": "^27.2.5",
          "@jest/test-result": "^27.2.5",
          "@jest/transform": "^27.2.5",
          "@jest/types": "^27.2.5",
          "@types/node": "*",
          "chalk": "^4.0.0",
          "emittery": "^0.8.1",
          "exit": "^0.1.2",
          "graceful-fs": "^4.2.4",
          "jest-docblock": "^27.0.6",
          "jest-environment-jsdom": "^27.2.5",
          "jest-environment-node": "^27.2.5",
          "jest-haste-map": "^27.2.5",
          "jest-leak-detector": "^27.2.5",
          "jest-message-util": "^27.2.5",
          "jest-resolve": "^27.2.5",
          "jest-runtime": "^27.2.5",
          "jest-util": "^27.2.5",
          "jest-worker": "^27.2.5",
          "source-map-support": "^0.5.6",
          "throat": "^6.0.1"
        }
      },
      "jest-runtime": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-runtime/-/jest-runtime-27.2.5.tgz",
        "integrity": "sha512-N0WRZ3QszKyZ3Dm27HTBbBuestsSd3Ud5ooVho47XZJ8aSKO/X1Ag8M1dNx9XzfGVRNdB/xCA3lz8MJwIzPLLA==",
        "requires": {
          "@jest/console": "^27.2.5",
          "@jest/environment": "^27.2.5",
          "@jest/fake-timers": "^27.2.5",
          "@jest/globals": "^27.2.5",
          "@jest/source-map": "^27.0.6",
          "@jest/test-result": "^27.2.5",
          "@jest/transform": "^27.2.5",
          "@jest/types": "^27.2.5",
          "@types/yargs": "^16.0.0",
          "chalk": "^4.0.0",
          "cjs-module-lexer": "^1.0.0",
          "collect-v8-coverage": "^1.0.0",
          "execa": "^5.0.0",
          "exit": "^0.1.2",
          "glob": "^7.1.3",
          "graceful-fs": "^4.2.4",
          "jest-haste-map": "^27.2.5",
          "jest-message-util": "^27.2.5",
          "jest-mock": "^27.2.5",
          "jest-regex-util": "^27.0.6",
          "jest-resolve": "^27.2.5",
          "jest-snapshot": "^27.2.5",
          "jest-util": "^27.2.5",
          "jest-validate": "^27.2.5",
          "slash": "^3.0.0",
          "strip-bom": "^4.0.0",
          "yargs": "^16.2.0"
        }
      },
      "jest-serializer": {
        "version": "27.0.6",
        "resolved": "https://registry.npmjs.org/jest-serializer/-/jest-serializer-27.0.6.tgz",
        "integrity": "sha512-PtGdVK9EGC7dsaziskfqaAPib6wTViY3G8E5wz9tLVPhHyiDNTZn/xjZ4khAw+09QkoOVpn7vF5nPSN6dtBexA==",
        "requires": {
          "@types/node": "*",
          "graceful-fs": "^4.2.4"
        }
      },
      "jest-snapshot": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-snapshot/-/jest-snapshot-27.2.5.tgz",
        "integrity": "sha512-2/Jkn+VN6Abwz0llBltZaiJMnL8b1j5Bp/gRIxe9YR3FCEh9qp0TXVV0dcpTGZ8AcJV1SZGQkczewkI9LP5yGw==",
        "requires": {
          "@babel/core": "^7.7.2",
          "@babel/generator": "^7.7.2",
          "@babel/parser": "^7.7.2",
          "@babel/plugin-syntax-typescript": "^7.7.2",
          "@babel/traverse": "^7.7.2",
          "@babel/types": "^7.0.0",
          "@jest/transform": "^27.2.5",
          "@jest/types": "^27.2.5",
          "@types/babel__traverse": "^7.0.4",
          "@types/prettier": "^2.1.5",
          "babel-preset-current-node-syntax": "^1.0.0",
          "chalk": "^4.0.0",
          "expect": "^27.2.5",
          "graceful-fs": "^4.2.4",
          "jest-diff": "^27.2.5",
          "jest-get-type": "^27.0.6",
          "jest-haste-map": "^27.2.5",
          "jest-matcher-utils": "^27.2.5",
          "jest-message-util": "^27.2.5",
          "jest-resolve": "^27.2.5",
          "jest-util": "^27.2.5",
          "natural-compare": "^1.4.0",
          "pretty-format": "^27.2.5",
          "semver": "^7.3.2"
        },
        "dependencies": {
          "semver": {
            "version": "7.3.5",
            "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
            "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
            "requires": {
              "lru-cache": "^6.0.0"
            }
          }
        }
      },
      "jest-util": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-util/-/jest-util-27.2.5.tgz",
        "integrity": "sha512-QRhDC6XxISntMzFRd/OQ6TGsjbzA5ONO0tlAj2ElHs155x1aEr0rkYJBEysG6H/gZVH3oGFzCdAB/GA8leh8NQ==",
        "requires": {
          "@jest/types": "^27.2.5",
          "@types/node": "*",
          "chalk": "^4.0.0",
          "graceful-fs": "^4.2.4",
          "is-ci": "^3.0.0",
          "picomatch": "^2.2.3"
        }
      },
      "jest-validate": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-validate/-/jest-validate-27.2.5.tgz",
        "integrity": "sha512-XgYtjS89nhVe+UfkbLgcm+GgXKWgL80t9nTcNeejyO3t0Sj/yHE8BtIJqjZu9NXQksYbGImoQRXmQ1gP+Guffw==",
        "requires": {
          "@jest/types": "^27.2.5",
          "camelcase": "^6.2.0",
          "chalk": "^4.0.0",
          "jest-get-type": "^27.0.6",
          "leven": "^3.1.0",
          "pretty-format": "^27.2.5"
        },
        "dependencies": {
          "camelcase": {
            "version": "6.2.0",
            "resolved": "https://registry.npmjs.org/camelcase/-/camelcase-6.2.0.tgz",
            "integrity": "sha512-c7wVvbw3f37nuobQNtgsgG9POC9qMbNuMQmTCqZv23b6MIz0fcYpBiOlv9gEN/hdLdnZTDQhg6e9Dq5M1vKvfg=="
          }
        }
      },
      "jest-watcher": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-watcher/-/jest-watcher-27.2.5.tgz",
        "integrity": "sha512-umV4qGozg2Dn6DTTtqAh9puPw+DGLK9AQas7+mWjiK8t0fWMpxKg8ZXReZw7L4C88DqorsGUiDgwHNZ+jkVrkQ==",
        "requires": {
          "@jest/test-result": "^27.2.5",
          "@jest/types": "^27.2.5",
          "@types/node": "*",
          "ansi-escapes": "^4.2.1",
          "chalk": "^4.0.0",
          "jest-util": "^27.2.5",
          "string-length": "^4.0.1"
        }
      },
      "jest-worker": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/jest-worker/-/jest-worker-27.2.5.tgz",
        "integrity": "sha512-HTjEPZtcNKZ4LnhSp02NEH4vE+5OpJ0EsOWYvGQpHgUMLngydESAAMH5Wd/asPf29+XUDQZszxpLg1BkIIA2aw==",
        "requires": {
          "@types/node": "*",
          "merge-stream": "^2.0.0",
          "supports-color": "^8.0.0"
        },
        "dependencies": {
          "supports-color": {
            "version": "8.1.1",
            "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
            "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
            "requires": {
              "has-flag": "^4.0.0"
            }
          }
        }
      },
      "js-tokens": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
        "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="
      },
      "js-yaml": {
        "version": "3.14.1",
        "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-3.14.1.tgz",
        "integrity": "sha512-okMH7OXXJ7YrN9Ok3/SXrnu4iX9yOk+25nqX4imS2npuvTYDmo/QEZoqwZkYaIDk3jVvBOTOIEgEhaLOynBS9g==",
        "requires": {
          "argparse": "^1.0.7",
          "esprima": "^4.0.0"
        }
      },
      "jsdom": {
        "version": "16.7.0",
        "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-16.7.0.tgz",
        "integrity": "sha512-u9Smc2G1USStM+s/x1ru5Sxrl6mPYCbByG1U/hUmqaVsm4tbNyS7CicOSRyuGQYZhTu0h84qkZZQ/I+dzizSVw==",
        "requires": {
          "abab": "^2.0.5",
          "acorn": "^8.2.4",
          "acorn-globals": "^6.0.0",
          "cssom": "^0.4.4",
          "cssstyle": "^2.3.0",
          "data-urls": "^2.0.0",
          "decimal.js": "^10.2.1",
          "domexception": "^2.0.1",
          "escodegen": "^2.0.0",
          "form-data": "^3.0.0",
          "html-encoding-sniffer": "^2.0.1",
          "http-proxy-agent": "^4.0.1",
          "https-proxy-agent": "^5.0.0",
          "is-potential-custom-element-name": "^1.0.1",
          "nwsapi": "^2.2.0",
          "parse5": "6.0.1",
          "saxes": "^5.0.1",
          "symbol-tree": "^3.2.4",
          "tough-cookie": "^4.0.0",
          "w3c-hr-time": "^1.0.2",
          "w3c-xmlserializer": "^2.0.0",
          "webidl-conversions": "^6.1.0",
          "whatwg-encoding": "^1.0.5",
          "whatwg-mimetype": "^2.3.0",
          "whatwg-url": "^8.5.0",
          "ws": "^7.4.6",
          "xml-name-validator": "^3.0.0"
        }
      },
      "jsesc": {
        "version": "2.5.2",
        "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-2.5.2.tgz",
        "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA=="
      },
      "json5": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.0.tgz",
        "integrity": "sha512-f+8cldu7X/y7RAJurMEJmdoKXGB/X550w2Nr3tTbezL6RwEE/iMcm+tZnXeoZtKuOq6ft8+CqzEkrIgx1fPoQA==",
        "requires": {
          "minimist": "^1.2.5"
        }
      },
      "kleur": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/kleur/-/kleur-3.0.3.tgz",
        "integrity": "sha512-eTIzlVOSUR+JxdDFepEYcBMtZ9Qqdef+rnzWdRZuMbOywu5tO2w2N7rqjoANZ5k9vywhL6Br1VRjUIgTQx4E8w=="
      },
      "leven": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/leven/-/leven-3.1.0.tgz",
        "integrity": "sha512-qsda+H8jTaUaN/x5vzW2rzc+8Rw4TAQ/4KjB46IwK5VH+IlVeeeje/EoZRpiXvIqjFgK84QffqPztGI3VBLG1A=="
      },
      "levn": {
        "version": "0.3.0",
        "resolved": "https://registry.npmjs.org/levn/-/levn-0.3.0.tgz",
        "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
        "requires": {
          "prelude-ls": "~1.1.2",
          "type-check": "~0.3.2"
        }
      },
      "locate-path": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-5.0.0.tgz",
        "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
        "requires": {
          "p-locate": "^4.1.0"
        }
      },
      "lodash": {
        "version": "4.17.21",
        "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
        "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="
      },
      "log-symbols": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/log-symbols/-/log-symbols-4.1.0.tgz",
        "integrity": "sha512-8XPvpAA8uyhfteu8pIvQxpJZ7SYYdpUivZpGy6sFsBuKRY/7rQGavedeB8aK+Zkyq6upMFVL/9AW6vOYzfRyLg==",
        "requires": {
          "chalk": "^4.1.0",
          "is-unicode-supported": "^0.1.0"
        }
      },
      "lru-cache": {
        "version": "6.0.0",
        "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
        "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
        "requires": {
          "yallist": "^4.0.0"
        }
      },
      "make-dir": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/make-dir/-/make-dir-3.1.0.tgz",
        "integrity": "sha512-g3FeP20LNwhALb/6Cz6Dd4F2ngze0jz7tbzrD2wAV+o9FeNHe4rL+yK2md0J/fiSf1sa1ADhXqi5+oVwOM/eGw==",
        "requires": {
          "semver": "^6.0.0"
        }
      },
      "makeerror": {
        "version": "1.0.11",
        "resolved": "https://registry.npmjs.org/makeerror/-/makeerror-1.0.11.tgz",
        "integrity": "sha1-4BpckQnyr3lmDk6LlYd5AYT1qWw=",
        "requires": {
          "tmpl": "1.0.x"
        }
      },
      "merge-stream": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/merge-stream/-/merge-stream-2.0.0.tgz",
        "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w=="
      },
      "micromatch": {
        "version": "4.0.4",
        "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.4.tgz",
        "integrity": "sha512-pRmzw/XUcwXGpD9aI9q/0XOwLNygjETJ8y0ao0wdqprrzDa4YnxLcz7fQRZr8voh8V10kGhABbNcHVk5wHgWwg==",
        "requires": {
          "braces": "^3.0.1",
          "picomatch": "^2.2.3"
        }
      },
      "mime-db": {
        "version": "1.50.0",
        "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.50.0.tgz",
        "integrity": "sha512-9tMZCDlYHqeERXEHO9f/hKfNXhre5dK2eE/krIvUjZbS2KPcqGDfNShIWS1uW9XOTKQKqK6qbeOci18rbfW77A=="
      },
      "mime-types": {
        "version": "2.1.33",
        "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.33.tgz",
        "integrity": "sha512-plLElXp7pRDd0bNZHw+nMd52vRYjLwQjygaNg7ddJ2uJtTlmnTCjWuPKxVu6//AdaRuME84SvLW91sIkBqGT0g==",
        "requires": {
          "mime-db": "1.50.0"
        }
      },
      "mimic-fn": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/mimic-fn/-/mimic-fn-2.1.0.tgz",
        "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg=="
      },
      "minimatch": {
        "version": "3.0.4",
        "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.0.4.tgz",
        "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
        "requires": {
          "brace-expansion": "^1.1.7"
        }
      },
      "minimist": {
        "version": "1.2.5",
        "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
        "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw=="
      },
      "ms": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
        "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
      },
      "mute-stream": {
        "version": "0.0.8",
        "resolved": "https://registry.npmjs.org/mute-stream/-/mute-stream-0.0.8.tgz",
        "integrity": "sha512-nnbWWOkoWyUsTjKrhgD0dcz22mdkSnpYqbEjIm2nhwhuxlSkpywJmBo8h0ZqJdkp73mb90SssHkN4rsRaBAfAA=="
      },
      "natural-compare": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
        "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc="
      },
      "node-int64": {
        "version": "0.4.0",
        "resolved": "https://registry.npmjs.org/node-int64/-/node-int64-0.4.0.tgz",
        "integrity": "sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs="
      },
      "node-modules-regexp": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/node-modules-regexp/-/node-modules-regexp-1.0.0.tgz",
        "integrity": "sha1-jZ2+KJZKSsVxLpExZCEHxx6Q7EA="
      },
      "node-releases": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.0.tgz",
        "integrity": "sha512-aA87l0flFYMzCHpTM3DERFSYxc6lv/BltdbRTOMZuxZ0cwZCD3mejE5n9vLhSJCN++/eOqr77G1IO5uXxlQYWA=="
      },
      "normalize-path": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz",
        "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA=="
      },
      "npm-run-path": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/npm-run-path/-/npm-run-path-4.0.1.tgz",
        "integrity": "sha512-S48WzZW777zhNIrn7gxOlISNAqi9ZC/uQFnRdbeIHhZhCA6UqpkOT8T1G7BvfdgP4Er8gF4sUbaS0i7QvIfCWw==",
        "requires": {
          "path-key": "^3.0.0"
        }
      },
      "nwsapi": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.0.tgz",
        "integrity": "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ=="
      },
      "once": {
        "version": "1.4.0",
        "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
        "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
        "requires": {
          "wrappy": "1"
        }
      },
      "onetime": {
        "version": "5.1.2",
        "resolved": "https://registry.npmjs.org/onetime/-/onetime-5.1.2.tgz",
        "integrity": "sha512-kbpaSSGJTWdAY5KPVeMOKXSrPtr8C8C7wodJbcsd51jRnmD+GZu8Y0VoU6Dm5Z4vWr0Ig/1NKuWRKf7j5aaYSg==",
        "requires": {
          "mimic-fn": "^2.1.0"
        }
      },
      "optionator": {
        "version": "0.8.3",
        "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.8.3.tgz",
        "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
        "requires": {
          "deep-is": "~0.1.3",
          "fast-levenshtein": "~2.0.6",
          "levn": "~0.3.0",
          "prelude-ls": "~1.1.2",
          "type-check": "~0.3.2",
          "word-wrap": "~1.2.3"
        }
      },
      "ora": {
        "version": "5.4.1",
        "resolved": "https://registry.npmjs.org/ora/-/ora-5.4.1.tgz",
        "integrity": "sha512-5b6Y85tPxZZ7QytO+BQzysW31HJku27cRIlkbAXaNx+BdcVi+LlRFmVXzeF6a7JCwJpyw5c4b+YSVImQIrBpuQ==",
        "requires": {
          "bl": "^4.1.0",
          "chalk": "^4.1.0",
          "cli-cursor": "^3.1.0",
          "cli-spinners": "^2.5.0",
          "is-interactive": "^1.0.0",
          "is-unicode-supported": "^0.1.0",
          "log-symbols": "^4.1.0",
          "strip-ansi": "^6.0.0",
          "wcwidth": "^1.0.1"
        }
      },
      "os-tmpdir": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
        "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ="
      },
      "p-limit": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-2.3.0.tgz",
        "integrity": "sha512-//88mFWSJx8lxCzwdAABTJL2MyWB12+eIY7MDL2SqLmAkeKU9qxRvWuSyTjm3FUmpBEMuFfckAIqEaVGUDxb6w==",
        "requires": {
          "p-try": "^2.0.0"
        }
      },
      "p-locate": {
        "version": "4.1.0",
        "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-4.1.0.tgz",
        "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
        "requires": {
          "p-limit": "^2.2.0"
        }
      },
      "p-try": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/p-try/-/p-try-2.2.0.tgz",
        "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ=="
      },
      "parse5": {
        "version": "6.0.1",
        "resolved": "https://registry.npmjs.org/parse5/-/parse5-6.0.1.tgz",
        "integrity": "sha512-Ofn/CTFzRGTTxwpNEs9PP93gXShHcTq255nzRYSKe8AkVpZY7e1fpmTfOyoIvjP5HG7Z2ZM7VS9PPhQGW2pOpw=="
      },
      "path-exists": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
        "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w=="
      },
      "path-is-absolute": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
        "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18="
      },
      "path-key": {
        "version": "3.1.1",
        "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
        "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q=="
      },
      "path-parse": {
        "version": "1.0.7",
        "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
        "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw=="
      },
      "picocolors": {
        "version": "1.0.0",
        "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.0.0.tgz",
        "integrity": "sha512-1fygroTLlHu66zi26VoTDv8yRgm0Fccecssto+MhsZ0D/DGW2sm8E8AjW7NU5VVTRt5GxbeZ5qBuJr+HyLYkjQ=="
      },
      "picomatch": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.0.tgz",
        "integrity": "sha512-lY1Q/PiJGC2zOv/z391WOTD+Z02bCgsFfvxoXXf6h7kv9o+WmsmzYqrAwY63sNgOxE4xEdq0WyUnXfKeBrSvYw=="
      },
      "pirates": {
        "version": "4.0.1",
        "resolved": "https://registry.npmjs.org/pirates/-/pirates-4.0.1.tgz",
        "integrity": "sha512-WuNqLTbMI3tmfef2TKxlQmAiLHKtFhlsCZnPIpuv2Ow0RDVO8lfy1Opf4NUzlMXLjPl+Men7AuVdX6TA+s+uGA==",
        "requires": {
          "node-modules-regexp": "^1.0.0"
        }
      },
      "pkg-dir": {
        "version": "4.2.0",
        "resolved": "https://registry.npmjs.org/pkg-dir/-/pkg-dir-4.2.0.tgz",
        "integrity": "sha512-HRDzbaKjC+AOWVXxAU/x54COGeIv9eb+6CkDSQoNTt4XyWoIJvuPsXizxu/Fr23EiekbtZwmh1IcIG/l/a10GQ==",
        "requires": {
          "find-up": "^4.0.0"
        }
      },
      "prelude-ls": {
        "version": "1.1.2",
        "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.1.2.tgz",
        "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ="
      },
      "pretty-format": {
        "version": "27.2.5",
        "resolved": "https://registry.npmjs.org/pretty-format/-/pretty-format-27.2.5.tgz",
        "integrity": "sha512-+nYn2z9GgicO9JiqmY25Xtq8SYfZ/5VCpEU3pppHHNAhd1y+ZXxmNPd1evmNcAd6Hz4iBV2kf0UpGth5A/VJ7g==",
        "requires": {
          "@jest/types": "^27.2.5",
          "ansi-regex": "^5.0.1",
          "ansi-styles": "^5.0.0",
          "react-is": "^17.0.1"
        },
        "dependencies": {
          "ansi-styles": {
            "version": "5.2.0",
            "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-5.2.0.tgz",
            "integrity": "sha512-Cxwpt2SfTzTtXcfOlzGEee8O+c+MmUgGrNiBcXnuWxuFJHe6a5Hz7qwhwe5OgaSYI0IJvkLqWX1ASG+cJOkEiA=="
          }
        }
      },
      "prompts": {
        "version": "2.4.2",
        "resolved": "https://registry.npmjs.org/prompts/-/prompts-2.4.2.tgz",
        "integrity": "sha512-NxNv/kLguCA7p3jE8oL2aEBsrJWgAakBpgmgK6lpPWV+WuOmY6r2/zbAVnP+T8bQlA0nzHXSJSJW0Hq7ylaD2Q==",
        "requires": {
          "kleur": "^3.0.3",
          "sisteransi": "^1.0.5"
        }
      },
      "psl": {
        "version": "1.8.0",
        "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
        "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ=="
      },
      "punycode": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
        "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=="
      },
      "react-is": {
        "version": "17.0.2",
        "resolved": "https://registry.npmjs.org/react-is/-/react-is-17.0.2.tgz",
        "integrity": "sha512-w2GsyukL62IJnlaff/nRegPQR94C/XXamvMWmSHRJ4y7Ts/4ocGRmTHvOs8PSE6pB3dWOrD/nueuU5sduBsQ4w=="
      },
      "readable-stream": {
        "version": "3.6.0",
        "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
        "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
        "requires": {
          "inherits": "^2.0.3",
          "string_decoder": "^1.1.1",
          "util-deprecate": "^1.0.1"
        }
      },
      "require-directory": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/require-directory/-/require-directory-2.1.1.tgz",
        "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I="
      },
      "resolve": {
        "version": "1.20.0",
        "resolved": "https://registry.npmjs.org/resolve/-/resolve-1.20.0.tgz",
        "integrity": "sha512-wENBPt4ySzg4ybFQW2TT1zMQucPK95HSh/nq2CFTZVOGut2+pQvSsgtda4d26YrYcr067wjbmzOG8byDPBX63A==",
        "requires": {
          "is-core-module": "^2.2.0",
          "path-parse": "^1.0.6"
        }
      },
      "resolve-cwd": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/resolve-cwd/-/resolve-cwd-3.0.0.tgz",
        "integrity": "sha512-OrZaX2Mb+rJCpH/6CpSqt9xFVpN++x01XnN2ie9g6P5/3xelLAkXWVADpdz1IHD/KFfEXyE6V0U01OQ3UO2rEg==",
        "requires": {
          "resolve-from": "^5.0.0"
        }
      },
      "resolve-from": {
        "version": "5.0.0",
        "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-5.0.0.tgz",
        "integrity": "sha512-qYg9KP24dD5qka9J47d0aVky0N+b4fTU89LN9iDnjB5waksiC49rvMB0PrUJQGoTmH50XPiqOvAjDfaijGxYZw=="
      },
      "restore-cursor": {
        "version": "3.1.0",
        "resolved": "https://registry.npmjs.org/restore-cursor/-/restore-cursor-3.1.0.tgz",
        "integrity": "sha512-l+sSefzHpj5qimhFSE5a8nufZYAM3sBSVMAPtYkmC+4EH2anSGaEMXSD0izRQbu9nfyQ9y5JrVmp7E8oZrUjvA==",
        "requires": {
          "onetime": "^5.1.0",
          "signal-exit": "^3.0.2"
        }
      },
      "rimraf": {
        "version": "3.0.2",
        "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
        "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
        "requires": {
          "glob": "^7.1.3"
        }
      },
      "run-async": {
        "version": "2.4.1",
        "resolved": "https://registry.npmjs.org/run-async/-/run-async-2.4.1.tgz",
        "integrity": "sha512-tvVnVv01b8c1RrA6Ep7JkStj85Guv/YrMcwqYQnwjsAS2cTmmPGBBjAjpCW7RrSodNSoE2/qg9O4bceNvUuDgQ=="
      },
      "rxjs": {
        "version": "7.4.0",
        "resolved": "https://registry.npmjs.org/rxjs/-/rxjs-7.4.0.tgz",
        "integrity": "sha512-7SQDi7xeTMCJpqViXh8gL/lebcwlp3d831F05+9B44A4B0WfsEwUQHR64gsH1kvJ+Ep/J9K2+n1hVl1CsGN23w==",
        "requires": {
          "tslib": "~2.1.0"
        }
      },
      "safe-buffer": {
        "version": "5.2.1",
        "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
        "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
      },
      "safer-buffer": {
        "version": "2.1.2",
        "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
        "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
      },
      "saxes": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/saxes/-/saxes-5.0.1.tgz",
        "integrity": "sha512-5LBh1Tls8c9xgGjw3QrMwETmTMVk0oFgvrFSvWx62llR2hcEInrKNZ2GZCCuuy2lvWrdl5jhbpeqc5hRYKFOcw==",
        "requires": {
          "xmlchars": "^2.2.0"
        }
      },
      "semver": {
        "version": "6.3.0",
        "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.0.tgz",
        "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
      },
      "shebang-command": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
        "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
        "requires": {
          "shebang-regex": "^3.0.0"
        }
      },
      "shebang-regex": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
        "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A=="
      },
      "signal-exit": {
        "version": "3.0.5",
        "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-3.0.5.tgz",
        "integrity": "sha512-KWcOiKeQj6ZyXx7zq4YxSMgHRlod4czeBQZrPb8OKcohcqAXShm7E20kEMle9WBt26hFcAf0qLOcp5zmY7kOqQ=="
      },
      "sisteransi": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/sisteransi/-/sisteransi-1.0.5.tgz",
        "integrity": "sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg=="
      },
      "slash": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
        "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q=="
      },
      "source-map": {
        "version": "0.6.1",
        "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
        "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g=="
      },
      "source-map-support": {
        "version": "0.5.20",
        "resolved": "https://registry.npmjs.org/source-map-support/-/source-map-support-0.5.20.tgz",
        "integrity": "sha512-n1lZZ8Ve4ksRqizaBQgxXDgKwttHDhyfQjA6YZZn8+AroHbsIz+JjwxQDxbp+7y5OYCI8t1Yk7etjD9CRd2hIw==",
        "requires": {
          "buffer-from": "^1.0.0",
          "source-map": "^0.6.0"
        }
      },
      "sprintf-js": {
        "version": "1.0.3",
        "resolved": "https://registry.npmjs.org/sprintf-js/-/sprintf-js-1.0.3.tgz",
        "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw="
      },
      "stack-utils": {
        "version": "2.0.5",
        "resolved": "https://registry.npmjs.org/stack-utils/-/stack-utils-2.0.5.tgz",
        "integrity": "sha512-xrQcmYhOsn/1kX+Vraq+7j4oE2j/6BFscZ0etmYg81xuM8Gq0022Pxb8+IqgOFUIaxHs0KaSb7T1+OegiNrNFA==",
        "requires": {
          "escape-string-regexp": "^2.0.0"
        },
        "dependencies": {
          "escape-string-regexp": {
            "version": "2.0.0",
            "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-2.0.0.tgz",
            "integrity": "sha512-UpzcLCXolUWcNu5HtVMHYdXJjArjsF9C0aNnquZYY4uW/Vu0miy5YoWvbV345HauVvcAUnpRuhMMcqTcGOY2+w=="
          }
        }
      },
      "string-length": {
        "version": "4.0.2",
        "resolved": "https://registry.npmjs.org/string-length/-/string-length-4.0.2.tgz",
        "integrity": "sha512-+l6rNN5fYHNhZZy41RXsYptCjA2Igmq4EG7kZAYFQI1E1VTXarr6ZPXBg6eq7Y6eK4FEhY6AJlyuFIb/v/S0VQ==",
        "requires": {
          "char-regex": "^1.0.2",
          "strip-ansi": "^6.0.0"
        }
      },
      "string-width": {
        "version": "4.2.3",
        "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
        "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
        "requires": {
          "emoji-regex": "^8.0.0",
          "is-fullwidth-code-point": "^3.0.0",
          "strip-ansi": "^6.0.1"
        }
      },
      "string_decoder": {
        "version": "1.3.0",
        "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
        "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
        "requires": {
          "safe-buffer": "~5.2.0"
        }
      },
      "strip-ansi": {
        "version": "6.0.1",
        "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
        "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
        "requires": {
          "ansi-regex": "^5.0.1"
        }
      },
      "strip-bom": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-4.0.0.tgz",
        "integrity": "sha512-3xurFv5tEgii33Zi8Jtp55wEIILR9eh34FAW00PZf+JnSsTmV/ioewSgQl97JHvgjoRGwPShsWm+IdrxB35d0w=="
      },
      "strip-final-newline": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
        "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA=="
      },
      "supports-color": {
        "version": "7.2.0",
        "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
        "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
        "requires": {
          "has-flag": "^4.0.0"
        }
      },
      "supports-hyperlinks": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/supports-hyperlinks/-/supports-hyperlinks-2.2.0.tgz",
        "integrity": "sha512-6sXEzV5+I5j8Bmq9/vUphGRM/RJNT9SCURJLjwfOg51heRtguGWDzcaBlgAzKhQa0EVNpPEKzQuBwZ8S8WaCeQ==",
        "requires": {
          "has-flag": "^4.0.0",
          "supports-color": "^7.0.0"
        }
      },
      "symbol-tree": {
        "version": "3.2.4",
        "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
        "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw=="
      },
      "terminal-link": {
        "version": "2.1.1",
        "resolved": "https://registry.npmjs.org/terminal-link/-/terminal-link-2.1.1.tgz",
        "integrity": "sha512-un0FmiRUQNr5PJqy9kP7c40F5BOfpGlYTrxonDChEZB7pzZxRNp/bt+ymiy9/npwXya9KH99nJ/GXFIiUkYGFQ==",
        "requires": {
          "ansi-escapes": "^4.2.1",
          "supports-hyperlinks": "^2.0.0"
        }
      },
      "test-exclude": {
        "version": "6.0.0",
        "resolved": "https://registry.npmjs.org/test-exclude/-/test-exclude-6.0.0.tgz",
        "integrity": "sha512-cAGWPIyOHU6zlmg88jwm7VRyXnMN7iV68OGAbYDk/Mh/xC/pzVPlQtY6ngoIH/5/tciuhGfvESU8GrHrcxD56w==",
        "requires": {
          "@istanbuljs/schema": "^0.1.2",
          "glob": "^7.1.4",
          "minimatch": "^3.0.4"
        }
      },
      "throat": {
        "version": "6.0.1",
        "resolved": "https://registry.npmjs.org/throat/-/throat-6.0.1.tgz",
        "integrity": "sha512-8hmiGIJMDlwjg7dlJ4yKGLK8EsYqKgPWbG3b4wjJddKNwc7N7Dpn08Df4szr/sZdMVeOstrdYSsqzX6BYbcB+w=="
      },
      "through": {
        "version": "2.3.8",
        "resolved": "https://registry.npmjs.org/through/-/through-2.3.8.tgz",
        "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU="
      },
      "tmp": {
        "version": "0.0.33",
        "resolved": "https://registry.npmjs.org/tmp/-/tmp-0.0.33.tgz",
        "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
        "requires": {
          "os-tmpdir": "~1.0.2"
        }
      },
      "tmpl": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/tmpl/-/tmpl-1.0.5.tgz",
        "integrity": "sha512-3f0uOEAQwIqGuWW2MVzYg8fV/QNnc/IpuJNG837rLuczAaLVHslWHZQj4IGiEl5Hs3kkbhwL9Ab7Hrsmuj+Smw=="
      },
      "to-fast-properties": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
        "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4="
      },
      "to-regex-range": {
        "version": "5.0.1",
        "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
        "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
        "requires": {
          "is-number": "^7.0.0"
        }
      },
      "tough-cookie": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-4.0.0.tgz",
        "integrity": "sha512-tHdtEpQCMrc1YLrMaqXXcj6AxhYi/xgit6mZu1+EDWUn+qhUf8wMQoFIy9NXuq23zAwtcB0t/MjACGR18pcRbg==",
        "requires": {
          "psl": "^1.1.33",
          "punycode": "^2.1.1",
          "universalify": "^0.1.2"
        }
      },
      "tr46": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/tr46/-/tr46-2.1.0.tgz",
        "integrity": "sha512-15Ih7phfcdP5YxqiB+iDtLoaTz4Nd35+IiAv0kQ5FNKHzXgdWqPoTIqEDDJmXceQt4JZk6lVPT8lnDlPpGDppw==",
        "requires": {
          "punycode": "^2.1.1"
        }
      },
      "tslib": {
        "version": "2.1.0",
        "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.1.0.tgz",
        "integrity": "sha512-hcVC3wYEziELGGmEEXue7D75zbwIIVUMWAVbHItGPx0ziyXxrOMQx4rQEVEV45Ut/1IotuEvwqPopzIOkDMf0A=="
      },
      "type-check": {
        "version": "0.3.2",
        "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.3.2.tgz",
        "integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
        "requires": {
          "prelude-ls": "~1.1.2"
        }
      },
      "type-detect": {
        "version": "4.0.8",
        "resolved": "https://registry.npmjs.org/type-detect/-/type-detect-4.0.8.tgz",
        "integrity": "sha512-0fr/mIH1dlO+x7TlcMy+bIDqKPsw/70tVyeHW787goQjhmqaZe10uwLujubK9q9Lg6Fiho1KUKDYz0Z7k7g5/g=="
      },
      "type-fest": {
        "version": "0.21.3",
        "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.21.3.tgz",
        "integrity": "sha512-t0rzBq87m3fVcduHDUFhKmyyX+9eo6WQjZvf51Ea/M0Q7+T374Jp1aUiyUl0GKxp8M/OETVHSDvmkyPgvX+X2w=="
      },
      "typedarray-to-buffer": {
        "version": "3.1.5",
        "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
        "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
        "requires": {
          "is-typedarray": "^1.0.0"
        }
      },
      "universalify": {
        "version": "0.1.2",
        "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
        "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg=="
      },
      "util-deprecate": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
        "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
      },
      "v8-to-istanbul": {
        "version": "8.1.0",
        "resolved": "https://registry.npmjs.org/v8-to-istanbul/-/v8-to-istanbul-8.1.0.tgz",
        "integrity": "sha512-/PRhfd8aTNp9Ggr62HPzXg2XasNFGy5PBt0Rp04du7/8GNNSgxFL6WBTkgMKSL9bFjH+8kKEG3f37FmxiTqUUA==",
        "requires": {
          "@types/istanbul-lib-coverage": "^2.0.1",
          "convert-source-map": "^1.6.0",
          "source-map": "^0.7.3"
        },
        "dependencies": {
          "source-map": {
            "version": "0.7.3",
            "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.7.3.tgz",
            "integrity": "sha512-CkCj6giN3S+n9qrYiBTX5gystlENnRW5jZeNLHpe6aue+SrHcG5VYwujhW9s4dY31mEGsxBDrHR6oI69fTXsaQ=="
          }
        }
      },
      "w3c-hr-time": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/w3c-hr-time/-/w3c-hr-time-1.0.2.tgz",
        "integrity": "sha512-z8P5DvDNjKDoFIHK7q8r8lackT6l+jo/Ye3HOle7l9nICP9lf1Ci25fy9vHd0JOWewkIFzXIEig3TdKT7JQ5fQ==",
        "requires": {
          "browser-process-hrtime": "^1.0.0"
        }
      },
      "w3c-xmlserializer": {
        "version": "2.0.0",
        "resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-2.0.0.tgz",
        "integrity": "sha512-4tzD0mF8iSiMiNs30BiLO3EpfGLZUT2MSX/G+o7ZywDzliWQ3OPtTZ0PTC3B3ca1UAf4cJMHB+2Bf56EriJuRA==",
        "requires": {
          "xml-name-validator": "^3.0.0"
        }
      },
      "walker": {
        "version": "1.0.7",
        "resolved": "https://registry.npmjs.org/walker/-/walker-1.0.7.tgz",
        "integrity": "sha1-L3+bj9ENZ3JisYqITijRlhjgKPs=",
        "requires": {
          "makeerror": "1.0.x"
        }
      },
      "wcwidth": {
        "version": "1.0.1",
        "resolved": "https://registry.npmjs.org/wcwidth/-/wcwidth-1.0.1.tgz",
        "integrity": "sha1-8LDc+RW8X/FSivrbLA4XtTLaL+g=",
        "requires": {
          "defaults": "^1.0.3"
        }
      },
      "webidl-conversions": {
        "version": "6.1.0",
        "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-6.1.0.tgz",
        "integrity": "sha512-qBIvFLGiBpLjfwmYAaHPXsn+ho5xZnGvyGvsarywGNc8VyQJUMHJ8OBKGGrPER0okBeMDaan4mNBlgBROxuI8w=="
      },
      "whatwg-encoding": {
        "version": "1.0.5",
        "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz",
        "integrity": "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==",
        "requires": {
          "iconv-lite": "0.4.24"
        }
      },
      "whatwg-mimetype": {
        "version": "2.3.0",
        "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz",
        "integrity": "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g=="
      },
      "whatwg-url": {
        "version": "8.7.0",
        "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-8.7.0.tgz",
        "integrity": "sha512-gAojqb/m9Q8a5IV96E3fHJM70AzCkgt4uXYX2O7EmuyOnLrViCQlsEBmF9UQIu3/aeAIp2U17rtbpZWNntQqdg==",
        "requires": {
          "lodash": "^4.7.0",
          "tr46": "^2.1.0",
          "webidl-conversions": "^6.1.0"
        }
      },
      "which": {
        "version": "2.0.2",
        "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
        "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
        "requires": {
          "isexe": "^2.0.0"
        }
      },
      "word-wrap": {
        "version": "1.2.3",
        "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.3.tgz",
        "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ=="
      },
      "wrap-ansi": {
        "version": "7.0.0",
        "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
        "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
        "requires": {
          "ansi-styles": "^4.0.0",
          "string-width": "^4.1.0",
          "strip-ansi": "^6.0.0"
        }
      },
      "wrappy": {
        "version": "1.0.2",
        "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
        "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
      },
      "write-file-atomic": {
        "version": "3.0.3",
        "resolved": "https://registry.npmjs.org/write-file-atomic/-/write-file-atomic-3.0.3.tgz",
        "integrity": "sha512-AvHcyZ5JnSfq3ioSyjrBkH9yW4m7Ayk8/9My/DD9onKeu/94fwrMocemO2QAJFAlnnDN+ZDS+ZjAR5ua1/PV/Q==",
        "requires": {
          "imurmurhash": "^0.1.4",
          "is-typedarray": "^1.0.0",
          "signal-exit": "^3.0.2",
          "typedarray-to-buffer": "^3.1.5"
        }
      },
      "ws": {
        "version": "7.5.5",
        "resolved": "https://registry.npmjs.org/ws/-/ws-7.5.5.tgz",
        "integrity": "sha512-BAkMFcAzl8as1G/hArkxOxq3G7pjUqQ3gzYbLL0/5zNkph70e+lCoxBGnm6AW1+/aiNeV4fnKqZ8m4GZewmH2w=="
      },
      "xml-name-validator": {
        "version": "3.0.0",
        "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-3.0.0.tgz",
        "integrity": "sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw=="
      },
      "xmlchars": {
        "version": "2.2.0",
        "resolved": "https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz",
        "integrity": "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw=="
      },
      "y18n": {
        "version": "5.0.8",
        "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
        "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA=="
      },
      "yallist": {
        "version": "4.0.0",
        "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
        "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
      },
      "yargs": {
        "version": "16.2.0",
        "resolved": "https://registry.npmjs.org/yargs/-/yargs-16.2.0.tgz",
        "integrity": "sha512-D1mvvtDG0L5ft/jGWkLpG1+m0eQxOfaBvTNELraWj22wSVUMWxZUvYgJYcKh6jGGIkJFhH4IZPQhR4TKpc8mBw==",
        "requires": {
          "cliui": "^7.0.2",
          "escalade": "^3.1.1",
          "get-caller-file": "^2.0.5",
          "require-directory": "^2.1.1",
          "string-width": "^4.2.0",
          "y18n": "^5.0.5",
          "yargs-parser": "^20.2.2"
        }
      },
      "yargs-parser": {
        "version": "20.2.9",
        "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-20.2.9.tgz",
        "integrity": "sha512-y11nGElTIV+CT3Zv9t7VKl+Q3hTQoT9a1Qzezhhl6Rp21gJ/IVTW7Z3y9EWXhuUBC2Shnf+DX0antecpAwSP8w=="
      }
    }
  }
  © 2021 GitHub, Inc.
  Terms
  Privacy
  Security
  Status
  Docs
  Contact GitHub
  Pricing
  API
  Training
  Blog
  About
  