 $(function(){
 $('[src="images/icons/menu-search.png"]').click(function(){
     if(!$('#searchHolder').length){
        $('#topNav').append('<div id="searchHolder" class="hide">'+
                                '<button id="searchBtn" class="u-pull-right bg-navyblue text-white">Search</button>'+
                                '<input id="searchQuery" class="margin-bottom-none u-pull-right margin-right" placeholder="search here" />'+
                             '</div>');
          $('#searchHolder').slideDown("fast", function(){$('#searchQuery').focus();});        
      }else{
         $('#searchHolder').slideUp("fast", function(){$(this).remove()});
      }
  });     
   $(document).on('click', '#searchBtn', function(){
       var SearchText = $('#searchQuery').val().trim().replace(/ /g, '+');
       if (SearchText != null && SearchText != '') {
           var searchRedirectURL = 'http://www.unionbankofindia.co.in/SearchPage.aspx?zoom_sort=0&zoom_xml=0&zoom_query=' + SearchText + '&zoom_per_page=10&zoom_and=0',
               win =  window.open(searchRedirectURL, '_blank');
            win.focus();
       }
    }).on('keypress', '#searchQuery', function(){
      var keycode = (event.keyCode ? event.keyCode : event.which);
      if(keycode == '13'){
        $('#searchBtn').click();
      }
    });
    $('.slide').unslider({
        autoplay: true 
      });
    $('#hamburgerOpen').click(function(){
      $('#sidemenu').animate({ right: "0" }, 500)
   });

    $('#hamburgerClose').click(function(){
      $('#sidemenu').animate({ right: "-1000px" }, 500)
   });

   $('.ct-tooltip').click(function(){
    $('#contactTooltip').fadeToggle();
   }); 

     var map = {
                'Personal': ['Accounts', 'Retail Loans', 'Online Payments', 'Digital Banking', 'Cards', 'Insurance & Investment', 'Other Service'],
                'NRI': ['NRI Deposit', 'NRI Investments', 'NRI Remittances', 'NRI Loans', 'NRI FAQs'],
                'International': ['Exports', 'Remittances', 'Network', 'Other Services', 'Treasury', 'International FAQs'],
                'Rural & Agri': ['Short Term Credit', 'Long Term Credit', 'Other Credit', 'Financial Inclusion', 'CSR', 'Partners With Govt', 'Minority Welfare'],
                'Corporate' : ['Deposit Accounts', 'Credit', 'Loan Syndication & Advisory', 'Selected Treasury Products', 'Government Business', 'Other Services', 'FAQs'],
                'MSME': ['MSME Overview', 'MSME Policy', 'Credit', 'Schemes', 'Channel Finance', 'Other Services', 'MSME Contact Points'],
                'Financial Inclusion': ['Model For FI', 'Products for FI', 'Schemes Implemented', 'CSR', 'Useful Information'],
                'About Us': ['Profile', 'Joint Venture', 'Investor Relations', 'Policies & Codes', 'Training System', 'Careers', 'KYC', 'Risk Management', 'CSR', 'MISC'],
                'Govt. Business': ['Departmentalized Ministries Accounts', 'Government Savings Schemes', 'Tax Collection', 'Pension'],               
                },
        l2_map = {
                'Personal_Accounts': {'Current Accounts': 'personal/RegularCurrentAccount.html',
                                    'Savings Accounts': 'personal/RegularSavingAccounts.html', 
                                    'Salary Accounts': 'personal/UnionSuperSalaryAccount.html', 
                                    'Recurring Deposit Scheme': 'personal/OrdinaryCumulativeDeposit.html',
                                    'Fixed Deposit Accounts': 'personal/FDAccounts.html',
                                    'Demat Accounts': 'personal/DematAccounts.html',
                                    'Online Trading Accounts': 'personal/OnlineTradingAccounts.html',
                                    'Useful Information': 'personal/UsefulInfo.html'},
                'Personal_Alternate Channel': {'ATMs': 'personal/ATM.html',
                                            'Internet Banking':'personal/InternetBanking.html',
                                            'Mobile Banking': 'personal/MobileBankingOverview.html',
                                            'SMS Banking': 'personal/SMSBanking.html',
                                            'Kisan ATM': 'personal/KisanATM.html'},                      
                'Personal_Cards': {'Credit Cards': 'personal/CreditCard.html',
                                    'Debit Cards': 'personal/DebitCard.html',
                                    'Gift Cards': 'personal/OtherCards.html',
                                    'Payroll Cards': 'personal/OtherCards.html',
                                    'Point of Sale terminal': 'personal/POSTerminal.html'},                                                
                'Personal_Insurance & Investment': {'Mutual Fund': 'personal/MutualFunds.html',
                                                    'Life Insurance': 'personal/LifeInsurance.html',
                                                    'General Insurance': 'personal/NonLifeInsurance.html',
                                                    'Union Demat': 'personal/DematAccounts.html',
                                                    'Online Trading Account': 'personal/OnlineTradingAccounts.html',
                                                    'ASBA Applications': 'personal/ASBA.html',
                                                    'Tax Saving Deposits': 'personal/PMSBY.html'},
                                                                        
                'Personal_Online Payments': {'Union Bill Pay': 'personal/UnionBillPayDesk.html',
                                            'Bill Pay Online': 'personal/UnionBillOnlinePay.html',
                                            'NEFT': 'personal/NEFT.html',
                                            'RTGS': 'personal/RTGS.html',
                                            'Online Tax Payment': 'personal/OnlineTaxPayment.html',
                                            'Donations': 'personal/Donations.html',
                                            'E-Ticketing KIOSK': 'personal/',
                                            'Online DGFT Payment': 'personal/ExchRateOthers.html'},
                                                                
                'Personal_Other Service': {'Call Center 24*7': 'personal/CallCenterOverview.html'},
                                                                
                'Personal_Retail Loans': {'Home Loans': 'personal/HomeLoan.html',
                                        'Vehicle Loans': 'personal/UnionMiles.html',
                                        'Education Loan': 'personal/UnionEducation.html',
                                        'Loans Against Property': 'personal/UnionMortgage.html',
                                        'Loans for Senior Citizens': 'personal/UnionReverseMortgage.html',
                                        'Personal Loan': 'personal/UnionPersonal.html',
                                        'Loans for Medical Practitioners': 'personal/UnionMedicalLoan.html',
                                        'Loans For Pensioners': 'personal/PensionersShortTermLoans.html',
                                        'Tools': 'personal/EMICalculator.html'},
                'Personal_Digital Banking': {
                                            'ATMs': 'personal/ATM.html',
                                            'Internet Banking': 'personal/InternetBanking.html',
                                            'Mobile Banking': 'personal/MobileBankingOverview.html',
                                            'SMS Banking': 'personal/SMSBanking.html',
                                            'KISAN ATM': 'personal/KisanATM.html'},
                'NRI_NRI Deposit': {'Feature of NRI Deposits': 'personal/NREAccount.html',
                                    'Savings Account': 'personal/NRESavingsAccount.html',
                                    'Current Account': 'personal/NRECurrentAccount.html',
                                    'Fixed Deposit[Rupees]': 'personal/NREFD.html',
                                    'Fixed Deposit[Foreign Currency]': 'personal/ForeignCurrency.html'},                                               
                'NRI_NRI Investments': {'Acquisition of Properties': 'personal/PropertyAcquisition.html',
                                    'Portfolio Investment': 'personal/PortfolioInvestment.html',
                                    'Non Resident Ordinary Account (NRO)': 'personal/NROAccount.html',
                                    'Gold Coins': 'personal/GoldCoins.html'},
                'NRI_NRI Remittances': {'Union E-REMIT': 'personal/E-REMIT.html',
                                    'Correspondent Banks': 'personal/NOSTROAccount.html',
                                    'Tie Up with Exchange Houses': 'personal/TieUp.html',
                                    'Union Bill Pay': 'personal/UnionBillPayDesk.html',
                                    'Tax Payment': 'personal/OnlineTaxPayment.html',
                                    'Union Bullet[RTGS]': 'personal/RTGS.html'},
                'NRI_NRI Loans': {'Home Loans': 'personal/HomeLoan.html',
                                    'Foreign Currency Loan': 'personal/ForeignCurrencyLoans.html',
                                    },
                'NRI_NRI FAQs' : {'FAQ' : 'personal/NRIFAQ.html',},
                'International_Exports': {'Preshipment Finance': 'personal/PackingCreditInRupees.html',
                                            'Postshipment Finance': 'personal/Postshipment.html',
                                            'Non-Fund Based Finance': 'personal/NonFundBasedFinance.html',
                                            'Others': 'personal/OtherFinance.html',
                                            'Online DGFT Payment': 'personal/OnlineDGFTPayment.html'},                
                'International_Remittances': {'E-REMIT': 'personal/E-REMIT.html'},                    
                'International_Network': {'Authorised Dealing Branches': 'pdf/IBD-Network-authorised dealing branches.pdf',
                                        'Correspondent Banks': 'personal/NOSTROAccount.html',
                                        'Overseas Branches': 'personal/IBD_Network_HongKong.html'},
                'International_Other Services': {'Foreign Currency Loans': 'personal/ForeignCurrencyLoans.html',
                                                'Exchange Rate Feed Over Reuters': 'personal/ExchRateOthers.html',
                                                'Online DGFT Payment': 'personal/OnlineDGFTPayment.html',
                                                'ECGC Cover': 'personal/ECGCCover.html'},
                'International_Treasury': {'State of Art': 'personal/TreasuryStateOfTheArt.html',
                                            'Products & Services': 'personal/ProductsServicesOptions.html',
                                            'Gold': 'personal/UnionGold.html'},
                   'International_International FAQs' : {'FAQ' : 'personal/NRIFAQ.html',},                          
                 'Financial Inclusion_Model For FI' : {'Introduction' : 'personal/FinancialInclusion.html'},
                 'Financial Inclusion_Products For FI' : {'Products for FI': 'personal/NoFrillsAccount.html'},
                 'Financial Inclusion_Schemes Implemented' : {'Union Adarsh Gram': 'personal/UnionAdarshGram.html',
                                                              'Financial Literacy (FLCC)': 'personal/FLCC.html' },
                 'Financial Inclusion_Projects Undertaken' : {'NDDB' : 'personal/DairyUnderNDDB.html',
                                                              'NREGP & SSP Employment' : 'NREGP_SSP.html' },
                 'Financial Inclusion_CSR' : {'Village Knowledge Center': 'personal/VKC.html',
                                              'VKC Portal': 'personal/VKCPortal.html'  },
                 'Financial Inclusion_Useful Information' : {'Useful Information': '/pdf/RABD-Useful info-Villages with 2000 plus Population.pdf'},  
                 'Govt. Business_Departmentalized Ministries Accounts' : {'DMA Overview' : 'personal/DeptMinistriesAccount.html'},
                 'Govt. Business_Government Savings Schemes' : {'PPF' : 'personal/PublicProvidentFund.html',
                                                                 'Senior Citizens Savings scheme' : 'personal/SeniorCitizensScheme.html', 
                                                                },
                 'Govt. Business_Pension' : {'Central Civil Pension' : 'personal/CentralCivilPension.html',
                                             'Railway Pension' : 'personal/RailwayPension.html', 
                                             'Defence Pension' : 'personal/DefencePension.html',
                                             'State Govt. Pension' : 'personal/StateGovtPension.html',
                                             'Telecom Pension' : 'personal/TelecomPension.html',
                                            },                                               
                 'Govt. Business_Tax Collection': {'Direct Taxes': 'personal/DirectTaxes.html',
                                            'Indirect Taxes': 'personal/IndirectTaxes.html',
                                            'State Tax Collections': 'personal/StateTaxCollections.html',
                                            'New Pension Scheme 2009': 'personal/NewPensionScheme.html',
                                            'Govt. Deposit Scheme': 'personal/PublicProvidentFund.html',
                                            'Pension': 'personal/CentralCivilPension.html',
                                            'Govt. Bonds': 'personal/RBITaxableBonds.html',
                                            'Departmentalised Ministries Account': 'personal/DeptMinistriesAccount.html'},
                 'MSME_MSME Overview' : { 'MSME Definition' : 'personal/MSMEDefinition.html',
                                          'Overall Scenario' : 'personal/MSMEScenario.html' },
                 'MSME_MSME Policy' : { 'MSME Definition' : 'personal/MSMEDefinition.html',
                                        'Code of Bank\'s Commitment' : 'personal/MSMEPolicyCode.html' },                                                                                                                                                                           
                 'MSME_Credit' : { 'Credit Disbursal Eligibility' : 'personal/MSMEEligibility.html',
                                   'Credit Disbursal Appraisal' : 'personal/MSMEAppraisal.html',
                                   'Credit Rating Procedure' : 'personal/MSMECreditRatingProcedure.html',
                                   'Credit Disbursal Margin' : 'personal/MSMEMargin.html',
                                   'Credit Disbursal Documentation' : 'personal/MSMEDocs.html',
                                   'Bank\'s Statistics' : 'personal/MSMEBankStats.html' },
                 'MSME_Schemes' : { 'Union High Pride' : 'personal/MSMEUnionHighPride.html',
                                    'Union SME Plus' : 'personal/MSMEUnionSMEPlus.html',
                                    'Union Support' : 'personal/MSMEUnionSupport.html',
                                    'Union Transport' : 'personal/MSMEUnionTransport.html',
                                    'Union Cyber' : 'personal/MSMEUnionCyber.html',
                                    'Generators Set' : 'personal/MSMEGeneratorsSet.html', 
                                    'Hosiery Unit' : 'personal/MSMEHosieryUnit.html',
                                    'LPG Autorickshaw' : 'personal/MSMELPGAutoRickshaw.html', 
                                    'Old Taxies' : 'personal/MSMEOldTaxies.html', },      
                  'MSME_Channel Finance' : {'Union Procure' : 'personal/MSMEUnionProcure.html',
                                            'Union Supply' : 'personal/MSMEUnionSupply.html'},
                  'MSME_Other Services' : {'Cash Management Service' : 'personal/MSMECashManagement.html',
                                            'Point Of Sales Terminals' : 'personal/POSTerminal.html'},   
                  'MSME_Contact Points' : {'Business Banking Branches' : 'MSMEBusinessBankingBranches.html',
                                            'Saral Centres' : 'MSMESaralCentres.html'},
                  'Corporate_Deposit Accounts' : { 'Current Accounts' : 'personal/RegularCurrentAccount.html',
                                                   'Fixed Deposit' : 'personal/FixedDepositReceipt.html',
                                                    },
                   'Corporate_Credit' : { 'Trade Finance' : 'personal/TradeFinance.html',
                                          'Working Capital' : 'personal/WorkingCapital.html',
                                          'Term Loan' : 'personal/TermLoan.html',
                                          'Line Of Credit' : 'personal/LineOfCredit.html',
                                          'Corporate Loan' : 'personal/CorporateLoan.html',
                                          'Infrastructure Finance' : 'personal/InfraFinance.html',
                                          'Channel Finance' : 'personal/ChannelFinance.html',
                                                    }, 
                    'Corporate_Loan Syndication & Advisory' : { 'Debt Restructuring' : 'personal/DebtRestructuring.html',
                                                                'Loan Syndication' : 'personal/LoanSyndication.html',
                                                                'Structured Finance' : 'personal/StructuredFinance.html',
                                                                'Mergers & Acquisitions' : 'personal/MNA.html',
                                                                'Private Equity' : 'personal/PrivateEquity.html',
                                                    }, 
                     'Corporate_Selected Treasury Products' : { 'Forex' : 'personal/ForeignCurrencyLoans.html',
                                                                'Derivatives' : 'personal/ForwardContract.html',
                                                    },  
                      'Corporate_Other Services' : { 'ECGC' : 'personal/ECGCCover.html',
                                                      'Cash Management Services' : 'MSMECashManagement.html',
                                                    },
                      'Corporate_Government Business': {'Direct Taxes': 'personal/DirectTaxes.html',
                                            'Indirect Taxes': 'personal/IndirectTaxes.html',
                                            'State Tax Collections': 'personal/StateTaxCollections.html',
                                            'New Pension Scheme 2009': 'personal/NewPensionScheme.html',
                                            'Govt. Deposit Scheme': 'personal/PublicProvidentFund.html',
                                            'Pension': 'personal/CentralCivilPension.html',
                                            'Govt. Bonds': 'personal/RBITaxableBonds.html',
                                            'Departmentalised Ministries Account': 'personal/DeptMinistriesAccount.html'},                                                                                                                           
                      'Corporate_FAQs'  : {'Corporate FAQs' : 'personal/CorporateFAQ.html'},                                                             
                  'Rural & Agri_Short Term Credit' : {'Crop Loan' : 'personal/CropLoan.html', 
                                                      'Union Green Card' : 'personal/UnionGreenCard.html',
                                                      'Union Gold Loan' : 'personal/UnionGoldLoan.html',     
                                                      'Loan Against Warehouse Receipt' : 'personal/WarehouseReceipt.html',
                                                    },
                  'Rural & Agri_Long Term Credit' : {  'Irrigation' : 'personal/Irrigation.html',
                                                       'Land Reclamation & Devt' : 'personal/LandReclamation.html',
                                                       'Land Purchase' : 'personal/LandPurchase.html',
                                                       'Farm Mechanization' : 'personal/FarmMech.html',
                                                       'Bio gas' : 'personal/BioGas.html',
                                                       'Union Mortgage for Farmers' : 'personal/MortgageForFarmers.html',
                                                       'Construction of Cold Storage' : 'personal/ColdStorageConstruction.html',
                                                       'Purchase of 2, 3, 4 wheelers' : 'personal/VehiclePurchase.html',
                                                       'Sericulture' : 'personal/Sericulture.html',
                                                       'Bhumiheen Green Card' : 'personal/BhumiheenGreenCard.html',
                                                       'Union White card' : 'personal/UnionWhiteCard.html',
                                                       'Allied activities' : 'personal/AlliedActivities.html',
                                                       'Agri Clinics / Busn.Centres' : 'personal/AgriClinicsBusnCentres.html',
                                                       'Purchase of Land for Agricultural' : 'personal/AgriculturalLandPurchase.html',
                                                       'Estate Purchase Loan' : 'personal/EstatePurchaseLoan.html',
                                                       'Kisan All Purpose Term Loan' : 'personal/KisanAllPurposeTermLoan.html',
                                                       'Kisan Tatkal Scheme' : 'personal/KisanTatkalScheme.html',
                                                       'Energy Scheme' : 'personal/EnergyScheme.html',   
                                                       'UNION BIO TECH' : 'personal/UnionBioTech.html'},
                  'Rural & Agri_Other Credit' : {'Union General Credit Card' : 'personal/UGCC.html',
                                                 'Joint Liability Groups' : 'JointLiabilityGroups.html' },                                                                                                                                                                                
                  'Rural & Agri_Financial Inclusion'  : {'Model For FI' : 'personal/FinancialInclusion.html',
                                                         'Products for FI': 'personal/RemittanceProduct.html',
                                                         'Projects Undertaken' : 'personal/HawkersProject.html',
                                                         'Schemes' : 'personal/RSETI.html'}, 
                  'Rural & Agri_CSR'  : {'Farmer\'s Clubs' : 'personal/FarmersClubs.html',
                                         'Union Mitr': 'personal/UnionMitr.html'},
                  'Rural & Agri_Partners With Govt'  : {'SFAC' : 'personal/SFAC.html'},
                  'Rural & Agri_Minority Welfare'  : {'PMs 15 Point Program' : 'personal/PM15PTPGM.html',
                                                      'Three Year Road Map' : 'ThreeYrRoadMap.html',
                                                      'Implementation Of Sachar Committee Norms' : 'personal/SacharCommitteeNormsImplementation.html'},                                                                                             
                   'About Us_Profile'   : {'Union Bank of India - Overview' : 'personal/UBIOverview.html',
                                           'Board of Directors': 'personal/DirectorsList.html',
                                           'Organizational Chart' : 'personal/OrgChart.html',
                                           'Awards & Commendations' : 'personal/Awards.html',                                           
                                         },
                   'About Us_Joint Venture'   : {'Star Union Dai-ichi Life Insurance' : 'personal/StarUnionDaiIchi.html',
                                                 'Union KBC Mutual Fund': 'personal/UnionKBC.html',                                         
                                               },  
                   'About Us_Policies & Codes'   : {'Policies & Code of Coduct': 'personal/Policies_Codes.html',
                                                     }, 
                    'About Us_Investor Relations'   : {'Shareholder\'s Information': 'personal/ShareholderAddressChange.html',
                                                       'Shareholding Pattern': 'personal/ShareholdingPatternOverview.html',
                                                       'Annual Reports' : 'personal/AnnualReports.html',                                        
                                                    'Press Releases' : 'personal/PressReleases.html', 
                                                     'ChiefVigilanceOfficer'  : 'personal/ChiefVigilanceOfficer.html',
                                                  }, 
                   'About Us_Training System'   : {'Overview': 'personal/TrainingSystem.html',
                                                    'College' : 'personal/UBICollege.html'},                 
                   'About Us_Careers'   : {'Overview': 'personal/Careers.html', },
                   'About Us_KYC'   : {'Overview': 'personal/KYC.html', },   
                   'About Us_Risk Management'   : {'Introduction': 'personal/RiskManagement.html',
                                                   'Credit Risk': 'personal/CreditRisk.html',
                                                   'Operational Risk': 'personal/OperationalRisk.html',
                                                   'Market Risk' : 'personal/MarketRisk.html',
                                                   'BaseL Guidelines' : 'personal/BaseLGuidelinesImplementation.html',
                                                    },                                
                    'About Us_CSR'   : {'Farmer\'s Clubs' : 'personal/FarmersClubs.html', 
                                        'Union Mitr' : 'personal/UnionMitr.html',
                                        'Village Knowledge Centre' : 'personal/VKC.html',
                                        'Union Adarsh Gram' : 'personal/UnionAdarshGram.html',                                          
                                        },  
                     'About Us_MISC'  : {'May We Help You' : 'personal/Conversations.html',
                                          'Testimonial' : 'personal/Testimonials.html',
                                          'About this Website' : 'personal/AboutWebsite.html'}                                                  
        },  
        count = 0,
        catStr = '';
        var images = {
                        'Personal' : 'personal.png',
                        'NRI' : 'nri.png',
                        'International' : 'int.png',
                        'Rural & Agri' : 'rural.png', 
                        'Corporate' : 'corp.png',
                        'MSME' : 'msme.png',
                        'Financial Inclusion' : 'fin-incl.png',
                        'About Us' : 'about-us.png',
                        'Govt. Business' : 'gov.png',
                        'Investor Relations' : 'investor.png',
                        };

        for(var key in map){
            catStr += (count % 2 == 0) 
                        ? '<div class="row">'+                                   
                            '<div class="columns six center full">' +
                                '<div class="image text-center margin-top-l">'+
                                    '<img class="mainIcon" src="images/icons/grey/' + images[key] + '" alt="">' +    
                                    '<div data-group="' + key + '" class="text-caps bgap-l lh-1">' +  key +'</div>' +
                                '</div>' +
                            '</div>'
                    :  '<div class="columns six center full">' +
                            '<div class="image text-center margin-top-l">'+
                                '<img class="mainIcon" src="images/icons/grey/' + images[key] + '" alt="">' +    
                                '<div data-group="' + key + '" class="text-caps bgap-l  lh-1">' +  key +'</div>' +
                            '</div>' +
                        '</div>'+
                    '</div>' ;
            count++;
        }
        $('#navGrid').append(catStr);
        
        $('.nav-grid-icon .columns').click(function(){
            var parent = $(this).find('[data-group]').data('group'),
                val = map[parent],
                catL2 = {};

                $(this).find('.mainIcon').attr('src', 'images/icons/red/' + images[parent])
                                    
                $('.nav-grid-icon').hide("slide", { direction: "up" }, 500);
                setTimeout(function(){
                    var links = '<ul id="catL2" class="list-style-none margin-left margin-right margin-bottom">';                    
                    val.forEach(function(value, index){
                        console.log(val);
                        links += '<li class="margin-bottom-none border">'+
                                    '<h3 class="margin-left-s"><span class="inline-block" style="width:85%">' + value + '</span><span class="u-pull-right">'+
                                    '<img class="icon margin-right-s align-middle" src="images/icons/grey/' + images[parent] + '" alt=""><img class="caret-right margin-left margin-right align-middle" src="images/icons/caret_right_100.png" alt=""></span></h3>'
                                    +'<p></p>'                                        
                                +'</li>';
                    });
                    links += '</ul>';
                    $('.content').append(links);
                    $('#catL2').accordion({
                        active: false,
                        collapsible: true,
                        autoHeight: false,
                        navigation: true, 
                            beforeActivate: function( event, ui ) {
                                if( $(ui.newPanel).is(':empty')){
                                catL2 = l2_map[parent + '_' + ui.newHeader.text()];
                                var content = '';
                                for(var catL3 in catL2){
                                    console.log(catL3);
                                    var gapClass = catL3 == Object.keys(catL2)[Object.keys(catL2).length - 1] ? 
                                                '' : 'margin-bottom bgap-xl border-bottom margin-top-l ';
                                    content += '<div class="' + gapClass +'font-xxl"><a class="text-black" href="' + catL2[catL3] + '">' + catL3 + '</a></div>';
                                }
                                $(ui.newPanel).append(content);
                              }
                            }
                    });
                    $('.back-btn').text(parent + ' / Back').removeClass('hide')
                }, 500);            
    });
    
    $('.back-btn').click(function(){
        var $btn = $(this);
        
        $('#catL2').animate({ marginLeft: "-1000px", opacity: 0 }, 500, function(){
            $(this).remove();
            $btn.addClass('hide');

            $('img[src*=red]').each(function(val, index){
              console.log($(this).attr('src'));
              var src = $(this).attr('src').replace('red','grey');
              console.log(src);
              $(this).attr('src', src);
            });

            $('.nav-grid-icon').show("slide", { direction: "up" }, 500);
        });
    });
    
    $(document).on('click', '#catL2 h3', function (e) {
        $('.rotated-icon').removeClass('rotated-icon');
        $(this).find('.caret-right').addClass('rotated-icon');
    }); 
});