 $(function(){
     var map = {
                'Personal': ['Accounts', 'Retail Loans', 'Online Payments', 'Digital Banking', 'Cards', 'Insurance & Investment', 'Other Service', 'TVC'],
                'NRI': ['NRI Deposit', 'NRI Investments', 'NRI Remittances', 'NRI Loans', 'NRI FAQs'],
                'International': ['Exports', 'Remittances', 'Network', 'Other Services', 'Treasury', 'FAQs'],
                'Rural & Agri': ['Short Term Credit', 'Long Term Credit', 'Other Credit', 'Financial Inclusion', 'CSR', 'Partners With Govt', 'Minority Welfare'],
                'Corporate' : ['Deposit Accounts', 'Credit', 'Loan Syndication & Advisory', 'Selected Treasury Products', 'Government Business', 'Other Services', 'Useful Information', 'FAQs'],
                'MSME': ['MSME Overview', 'MSME Policy', 'Credit', 'Schemes', 'Channel Finance', 'Special Scheme', 'Other Services', 'MSME Contact Points', 'Mudra', 'TVC'],
                'Financial Inclusion': ['Model For FI', 'Products for FI', 'Schemes Implemented', 'CSR', 'Useful Information'],
                'About Us': ['Profile', 'Joint Venture', 'Investor Relations', 'Policies & Codes', 'Training System', 'Careers', 'KYC', 'Risk Management', 'CSR', 'MISC'],
                'Govt. Business': ['Departmentalized Ministries Accounts', 'Government Savings Schemes', 'Tax Collection', 'Pension', 'Fund Management Solution'],
                'Investor Relations': ['Disclosures to Stock Exchange(s)', 'Shareholders Information', 'Financial Results', 'Annual Reports', 'Half Yearly Communicaions', 
                                        'General Meetings', 'Key Managerial Personnel', 'Investor Grievence Mechanism'],
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
                                        'Loans For Pensioners': 'personal/',
                                        'Loans For Salary A/C Holders': 'personal/',
                                        'Tools': 'personal/EMICalculator.html'},
                'Personal_Digital Banking': {'Digi Purse': 'personal/',
                                            'Branch Imps': 'personal/',
                                            'Mobile Passbook': 'personal/',
                                            'ATMs': 'personal/ATM.html',
                                            'Talking ATMs': 'personal/',
                                            'Remittance @ATMs': 'personal/',
                                            'Internet Banking': 'personal/InternetBanking.html',
                                            'Mobile Banking': 'personal/MobileBankingOverview.html',
                                            'SMS Banking': 'personal/SMSBanking.html',
                                            'KISAN ATM': 'personal/KisanATM.html',
                                            'Self ATM PIN Generation Through IVR': 'personal/' },
                'NRI_NRI Deposit': {'Feature of NRI Deposits': 'personal/',
                                    'Savings Account': 'personal/',
                                    'Current Account': 'personal/',
                                    'Fixed Deposit[Rupees]': 'personal/',
                                    'Fixed Deposit[Foreign Currency]': 'personal/'},                                               
                'NRI_NRI Investments': {'Acquisition of Properties': 'personal/',
                                    'Portfolio Investment': 'personal/',
                                    'Non Resident Ordinary Account (NRO)': 'personal/',
                                    'Gold Coins': 'personal/'},
                'NRI_NRI Remittances': {'Union E-REMIT': 'personal/',
                                    'Correspondent Banks': 'personal/',
                                    'Tie Up with Exchange Houses': 'personal/',
                                    'Union Bill Pay': 'personal/',
                                    'Tax Payment': 'personal/',
                                    'Union Bullet[RTGS]': 'personal/'},
                'NRI_NRI Loans': {'Home Loans': 'personal/',
                                    'Foreign Currency Loan': 'personal/',
                                    'NRI FAQs': 'personal/'},
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
                                            
                 'Financial Inclusion_Model For FI' : {'Introduction' : 'personal/FinancialInclusion.html'},
                 'Financial Inclusion_Products For FI' : {'Products for FI': 'personal/NoFrillsAccount.html'},
                 'Financial Inclusion_Schemes Implemented' : {'Union Adarsh Gram': 'personal/UnionAdarshGram.html',
                                                              'Financial Literacy (FLCC)': 'FLCC.html' },
                 'Financial Inclusion_CSR' : {'Village Knowledge Center': 'personal/VKC.html',
                                              'VKC Portal': 'personal/VKCPortal.html'  },
                 'Financial Inclusion_Useful Information' : {'Useful Information': '/pdf/RABD-Useful info-Villages with 2000 plus Population.pdf'},  
                 'Govt. Business_Tax Collection': {'Direct Taxes': 'personal/DirectTaxes.html',
                                            'Indirect Taxes': 'personal/IndirectTaxes.html',
                                            'State Tax Collections': 'personal/StateTaxCollections.html',
                                            'New Pension Scheme 2009': 'personal/NewPensionScheme.html',
                                            'Govt. Deposit Scheme': 'personal/',
                                            'Pension': 'personal/CentralCivilPension.html',
                                            'Govt. Bonds': 'personal/',
                                            'Departmentalised Ministries Account': 'personal/'},
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
                  'Corporate' : {'Deposit Accounts' : 'personal/RegularCurrentAccount.html',
                                 'Credit' : 'personal/TradeFinance.html', 
                                 'Loan Syndication & Advisory' : 'personal/DebtRestructuring.html', 
                                 'Selected Treasury Products' : 'personal/SelectedTreasuryProducts.html', 
                                 'Government Business' : 'personal/DirectTaxes.html', 
                                 'Government Deposit Schemes' : 'personal/PublicProvidentFund.html',
                                 'Other Services' : 'personal/MSMECashManagement.html', 
                                 'Useful Information' : 'personal/EconomicAnalysis.html', 
                                 'FAQs' : 'personal/CorporateFAQ.html'},  
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
        },
        count = 0,
        catStr = '';
                        
        for(var key in map){
            catStr += (count % 2 == 0) 
                        ? '<div class="row">'+                                   
                            '<div class="columns six center full">' +
                                '<div class="image text-center margin-top-l">'+
                                    '<img class="mainIcon" src="images/icons/personal_100.png" alt="">' +    
                                    '<div data-group="' + key + '" class="text-caps bgap-l lh-1">' +  key +'</div>' +
                                '</div>' +
                            '</div>'
                    :  '<div class="columns six center full">' +
                            '<div class="image text-center margin-top-l">'+
                                '<img class="mainIcon" src="images/icons/personal_100.png" alt="">' +    
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
                                    
                $('.nav-grid-icon').hide("slide", { direction: "up" }, 500);
                setTimeout(function(){
                    var links = '<ul id="catL2" class="list-style-none margin-left margin-right">';
                    val.forEach(function(value, index){
                        console.log(val);
                        links += '<li class="margin-bottom-none border">'+
                                    '<h3 class="margin-left-s"><span class="inline-block" style="width:85%">' + value + '</span><span class="u-pull-right">'+
                                    '<img class="icon margin-right-s align-middle" src="images/icons/personal_100.png" alt=""><img class="caret-right margin-left margin-right align-middle" src="images/icons/caret_right_100.png" alt=""></span></h3>'
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
            $('.nav-grid-icon').show("slide", { direction: "up" }, 500);
        });
    });
    
    $(document).on('click', '#catL2 h3', function (e) {
        $('.rotated-icon').removeClass('rotated-icon');
        $(this).find('.caret-right').addClass('rotated-icon');
    }); 
});