describe('Test Mobile Nav Setup and TearDown', function () {

    describe('Test setupMobileContentNav & teardownMobileContentNav', function () {
        beforeEach(function () {
            jasmine.getFixtures().fixturesPath = 'base/test/fixtures';

            loadFixtures('obs-project-page-fixture.html');
        });

        it('setupMobileContentNav() valid, #content-header and #content-body should be created', function () {
            setupMobileContentNavigation();
            expect($('#content-header').length).toEqual(1);
            expect($('#content-header #mobile-content-nav-toggle').length).toEqual(1);
            expect($('#content-header #mobile-content-nav').length).toEqual(1);
            expect($('#content-body').length).toEqual(1);

            teardownMobileContentNavigation();
            expect($('#content-header').length).toEqual(0);
            expect($('#content-header #mobile-content-nav-toggle').length).toEqual(0);
            expect($('#content-header #mobile-content-nav').length).toEqual(0);
            expect($('#content-body').length).toEqual(0);

            // Doing it a second time should end up with same results as first time
            setupMobileContentNavigation();
            expect($('#content-header').length).toEqual(1);
            expect($('#content-header #mobile-content-nav-toggle').length).toEqual(1);
            expect($('#content-header #mobile-content-nav').length).toEqual(1);
            expect($('#content-body').length).toEqual(1);

            // Not sure how to test as they use slideUp/SlideDown which causes being shown/hidden to happen async
            openMobileContentNav();
            closeMobileContentNav();
            toggleMobileContentNav();
        });
    });
});
